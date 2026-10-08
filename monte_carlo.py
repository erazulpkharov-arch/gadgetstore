# GadgetStore 6-zertkhanalyk jumys
# Source data: lecture 6 slide 25. Not real project history.
# Install matplotlib==3.10.8, then run: python monte_carlo.py
from pathlib import Path
from datetime import date, timedelta
from collections import Counter
from statistics import mean, pstdev
import random, math, json, csv, sys
import matplotlib
import matplotlib.pyplot as plt

RESULTS = Path('lab6_results')
RESULTS.mkdir(exist_ok=True)
SEED = 20261008
RUNS = 10_000
THROUGHPUT = [3, 8, 4, 10, 2, 7, 9, 5, 6, 6]
N = 60
START = date(2026, 10, 12)  # жоспарлық бастапқы дүйсенбі
PAUSE_WEEKS = {4, 12}       # нақты оқу күнтізбесі емес, 5-ЗЖ-дағы 2 апта резервінің моделі
PROJECT_WINDOW = 12        # 5-ЗЖ-дағы күнтізбелік жоспар терезесі
VELOCITY = 11              # SP / белсенді екі апталық спринт, өлшенген факт емес
SPRINT_WEEKS = 2

assert len(THROUGHPUT) == 10
assert all(isinstance(v, int) and v >= 0 for v in THROUGHPUT)
assert sum(THROUGHPUT) > 0
assert N > 0 and RUNS == 10_000
print('Python:', sys.version.split()[0], 'Matplotlib:', matplotlib.__version__)
print('Бақылау апталары:', len(THROUGHPUT))
print('Жиыны:', sum(THROUGHPUT), 'элемент; орташа:', mean(THROUGHPUT), 'элемент/белсенді апта')
print('Минимум:', min(THROUGHPUT), 'максимум:', max(THROUGHPUT), 'σ:', round(pstdev(THROUGHPUT), 3))

stories = [
    {'id':'S01','wbs':'1.1','title':'Қабылдаушы ретінде релиз шекарасын және қабылдау шартын көргім келеді', 'sp':3,
     'tasks':['Пайдаланушы сценарийлері','Must-have шекарасы','Қабылдау критерийлері','ФЕТ тізімі','API келісімі','Бекіту жазбасы']},
    {'id':'S02','wbs':'1.2','title':'Сатып алушы ретінде дұрыс бағасы мен суреті бар каталогты көргім келеді', 'sp':5,
     'tasks':['Тұрақты ID тексеруі','Баға өрістерін тексеру','Санат сәйкестігі','Сурет көздерін тіркеу','Seed қайталануын тексеру','Каталог қабылдауы']},
    {'id':'S03','wbs':'1.3','title':'Сатып алушы ретінде тауарды іздеп, сүзіп, толық сипаттамасын ашқым келеді', 'sp':5,
     'tasks':['Іздеу сценарийі','Санат сүзгісі','Сұрыптау сценарийі','Тауар беті','Бос нәтиже күйі','Мобильді тексеру']},
    {'id':'S04','wbs':'2.1','title':'Сатып алушы ретінде себет құрамын өзгертіп, қайта ашқанда сақталуын қалаймын', 'sp':8,
     'tasks':['Тауар қосу','Санын өзгерту','Тауар жою','Себет сақтау','Бүлінген дерек күйі','Себет қабылдауы']},
    {'id':'S05','wbs':'2.2','title':'Сатып алушы ретінде тапсырысымның базада дұрыс сомамен сақталуын қалаймын', 'sp':8,
     'tasks':['Сұрау келісімін тексеру','Тауарды базадан оқу','Серверлік сома','Транзакция тексеруі','ID жауабы','Тапсырыс жазбасы']},
    {'id':'S06','wbs':'2.3','title':'Сатып алушы ретінде форманы толтырып, тапсырыс нөмірін алғым келеді', 'sp':5,
     'tasks':['Аты-жөн өрісі','Телефон тексеруі','Мекенжай өрісі','Қате хабарламасы','Растау экраны','Себетті босату шарты']},
    {'id':'S07','wbs':'2.4','title':'Дүкен өкілі ретінде қате немесе қатар сұраулар қалдықты бұзбауын қалаймын', 'sp':8,
     'tasks':['Жоқ тауар тесті','Қайталанған ID тесті','Қалдықтан артық сан тесті','Жалған сома тесті','Қатар сұрау тесті','Рестарт тесті']},
    {'id':'S08','wbs':'3.1','title':'Тексеруші ретінде жобаны нұсқаулықпен қайта іске қосқым келеді', 'sp':5,
     'tasks':['Node нұсқасы','Іске қосу командасы','Порт конфигурациясы','Health тексеруі','Docker сценарийі','Таза ортадағы іске қосу']},
    {'id':'S09','wbs':'3.2','title':'Жоба иесі ретінде деректерді көшірмеден қалпына келтіргім келеді', 'sp':5,
     'tasks':['Жазуды тоқтату тәртібі','База көшірмесі','Бөлек ортада restore','Жазбалар санын салыстыру','Қалпына келу уақытын өлшеу','Регрессия хаттамасы']},
    {'id':'S10','wbs':'3.3','title':'Қабылдаушы ретінде жобаның негізгі сценарийі мен құжаттарын қабылдағым келеді', 'sp':3,
     'tasks':['Пайдаланушы нұсқаулығы','Іске қосу нұсқаулығы','Көрсетілім сценарийі','Ақаулар тізімі','Қабылдау хаттамасы','Архивті тексеру']}
]
items = [{'id':f"{s['id']}-T{i:02d}", 'story':s['id'], 'wbs':s['wbs'], 'result':t}
         for s in stories for i,t in enumerate(s['tasks'],1)]
TOTAL_SP = sum(s['sp'] for s in stories)
assert len(items) == N == 60 and len(stories) == 10 and TOTAL_SP == 55
for s in stories: print(s['id'], 'WBS',s['wbs'], '|',s['sp'],'SP |',s['title'])
with (RESULTS/'backlog_60.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=list(items[0])); w.writeheader(); w.writerows(items)
with (RESULTS/'throughput_lecture.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.writer(f); w.writerow(['observation_week','done','source'])
    w.writerows((i,n,'Lecture 6 slide 25, educational example') for i,n in enumerate(THROUGHPUT,1))
print('Жиыны:',len(items),'элемент және',TOTAL_SP,'SP. SP сағатқа айналдырылмайды.')

def simulate(history, backlog, runs=10_000, seed=SEED):
    if not history or not all(isinstance(x,int) and x >= 0 for x in history) or not any(history):
        raise ValueError('History must contain nonnegative integer counts and at least one positive count')
    if not isinstance(backlog,int) or backlog <= 0 or runs <= 0:
        raise ValueError('Backlog and runs must be positive')
    rng = random.Random(seed)
    durations = []
    for _ in range(runs):
        done = weeks = 0
        while done < backlog:
            done += rng.choice(history)
            weeks += 1
        durations.append(weeks)
    return durations

durations = simulate(THROUGHPUT,N,RUNS,SEED)
ordered = sorted(durations)
def quantile(values, q):
    ordered_values=sorted(values)
    return ordered_values[math.ceil(q*len(ordered_values))-1]
quantiles = {f'P{int(q*100)}':quantile(durations,q) for q in [.50,.70,.85,.95]}
print('10 000 жүгіртудің квантильдері:',quantiles)
print('Қарапайым бөлу:',N,'/',mean(THROUGHPUT),'=',N/mean(THROUGHPUT),'белсенді апта')
print('Симуляцияның орташа ұзақтығы:',round(mean(durations),3),'белсенді апта')

def calendar_week(active_weeks, pauses=PAUSE_WEEKS):
    active = calendar = 0
    while active < active_weeks:
        calendar += 1
        if calendar not in pauses: active += 1
    return calendar
def finish_date(active_weeks):
    return START + timedelta(days=7*calendar_week(active_weeks)-1)
rows=[]
for level,week in quantiles.items():
    share=sum(w <= week for w in durations)/RUNS
    row={'level':level,'active_weeks':week,'calendar_weeks':calendar_week(week),'finish_date':finish_date(week).isoformat(),'empirical_probability':share}
    rows.append(row)
    print(f"{level}: {week} белсенді апта; {row['calendar_weeks']} күнтізбелік апта; {row['finish_date']}; үлес {share:.1%}")
deadline = START + timedelta(days=7*PROJECT_WINDOW-1)
deadline_probability = sum(calendar_week(w)<=PROJECT_WINDOW for w in durations)/RUNS
print(f'5-ЗЖ-дағы {PROJECT_WINDOW} апталық терезе: {deadline}; осы модельде аяқталу үлесі {deadline_probability:.1%}')

plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10})
fig, axes = plt.subplots(1,2,figsize=(12,4.3),layout='constrained')
bins=range(min(durations),max(durations)+2)
axes[0].hist(durations,bins=[x-.5 for x in bins],color='#315A8A',edgecolor='white')
axes[0].set(title='Аяқталу мерзімінің таралуы',xlabel='Белсенді апта',ylabel='Жүгірту саны')
counts=Counter(durations); xs=sorted(counts)
ys=[sum(counts[x] for x in xs if x<=week)/RUNS for week in xs]
axes[1].step([xs[0]-1]+xs,[0]+ys,where='post',color='#315A8A',linewidth=2)
axes[1].set(title='Жинақталған аяқталу ықтималдығы',xlabel='Белсенді апта',ylabel='Ықтималдық',ylim=(0,1.04))
for level,color in [('P50','#37805C'),('P85','#BC6C25'),('P95','#8157A8')]:
    week=quantiles[level]
    axes[0].axvline(week,color=color,linestyle='--',label=f'{level}: {week}')
    axes[1].scatter([week],[sum(w<=week for w in durations)/RUNS],color=color,label=f'{level}: {week}',zorder=3)
for ax in axes:
    ax.set_xticks(xs); ax.grid(axis='y',alpha=.2); ax.legend(frameon=False)
fig.savefig(RESULTS/'monte_carlo.png',dpi=180)
fig.savefig(RESULTS/'monte_carlo.pdf')
plt.show()

det_sprints=math.ceil(TOTAL_SP/VELOCITY)
det_active=det_sprints*SPRINT_WEEKS
det_calendar=calendar_week(det_active)
det_probability=sum(w<=det_active for w in durations)/RUNS
print(f'Детерминистік: ceil({TOTAL_SP}/{VELOCITY}) = {det_sprints} спринт = {det_active} белсенді апта')
print(f'Күнтізбе: {det_calendar} апта, {finish_date(det_active)}')
print(f'Осы мерзімге дейін аяқталған симуляциялар: {det_probability:.1%}')
print(f'P85 айырмасы: {quantiles["P85"]-det_active} белсенді апта; күнтізбеде {calendar_week(quantiles["P85"])-det_calendar} апта')
print(f'P95 айырмасы: {quantiles["P95"]-det_active} белсенді апта')
print(f'5-ЗЖ терезесінің P85-тен айырмасы: {calendar_week(quantiles["P85"])-PROJECT_WINDOW} күнтізбелік апта')

poker = [
 ('S01',[2,3,5],3,'Шекараны жазу мен оны қабылдатуды әртүрлі түсіну','Ұмытылған жұмыс: ФЕТ және бекіту дәлелі'),
 ('S02',[3,5,8],5,'Каталогты толтыру мен дерек сапасын тексеру айырмасы','Жасырын тәуелділік: D2 сурет пен дерек шарты'),
 ('S03',[3,5,5],5,'Тек іздеу өрісі немесе толық таңдау сценарийі','Ұмытылған жұмыс: бос нәтиже және мобильді көрініс'),
 ('S04',[5,8,8],8,'Тек қосу немесе қайта ашқанда сақталатын себет','Дайындық түсінігі: бүлінген localStorage және сан шектері'),
 ('S05',[5,8,13],8,'INSERT жеткілікті ме әлде атомарлық өзгеріс керек пе','Жасырын жұмыс: серверлік баға және rollback'),
 ('S06',[3,5,8],5,'Форма көрінісі мен API қатесін көрсету айырмасы','Дайындық түсінігі: сәтті жауаптан кейін ғана себетті тазалау'),
 ('S07',[5,8,13],8,'Кәдімгі тест пен қатар сұрау сценарийінің айырмасы','Ұмытылған жұмыс: соңғы тауарға екі сұрау және жеке тест базасы'),
 ('S08',[3,5,8],5,'Өз компьютерінде іске қосу немесе таза ортада қайталау','Жасырын тәуелділік: Node нұсқасы, порт және Docker қолжетімділігі'),
 ('S09',[3,5,8],5,'Көшірме алу мен restore нәтижесін дәлелдеу айырмасы','Ұмытылған жұмыс: жазбаларды салыстыру және уақыт өлшеу'),
 ('S10',[2,3,5],3,'Файл тапсыру немесе қабылдау хаттамасымен жабу','Жасырын тәуелділік: D3 тексерушінің уақыты')
]
assert [row[2] for row in poker] == [s['sp'] for s in stories]
with (RESULTS/'poker_model.csv').open('w',encoding='utf-8-sig',newline='') as f:
    writer=csv.writer(f)
    writer.writerow(['story','A_model','B_model','C_model','range','consensus_model','disagreement','discovered'])
    for sid,votes,final,reason,found in poker:
        writer.writerow([sid,*votes,max(votes)-min(votes),final,reason,found])
        print(f'{sid}: {votes}; ауқым {max(votes)-min(votes)} SP; модельдік келісім {final} SP')
        print('  Себеп:',reason,'\n  Талқылауда анықталатыны:',found)
print('Модельдік келісім жиыны:',sum(row[2] for row in poker),'SP')

# Бэклог 20% ұлғайса, сол үлестіру жағдайындағы сезімталдық.
expanded=simulate(THROUGHPUT,72,RUNS,SEED)
print('60 элемент: P85 =',quantiles['P85'],'белсенді апта')
print('72 элемент: P85 =',quantile(expanded,.85),'белсенді апта')
print('Бұл ықтимал өзгерістің әсері, жаңа жұмыс болады деген факт емес.')

# Қайталанушылық пен мағыналық тексерулер
assert durations == simulate(THROUGHPUT,N,RUNS,SEED)
assert len(durations) == RUNS
assert min(durations) >= math.ceil(N/max(THROUGHPUT))
assert all(a<=b for a,b in zip(quantiles.values(),list(quantiles.values())[1:]))
assert simulate([2],5,3,1) == [3,3,3]
assert calendar_week(3)==3 and calendar_week(4)==5 and calendar_week(10)==11 and calendar_week(11)==13
try:
    simulate([0,0],2,2,1)
    raise AssertionError('Zero-only history must fail')
except ValueError: pass
summary={'seed':SEED,'runs':RUNS,'backlog':N,'story_points':TOTAL_SP,'throughput':THROUGHPUT,
         'data_status':'lecture_example_not_project_history','velocity_status':'assumed_not_measured',
         'velocity':VELOCITY,'start_date':START.isoformat(),'pause_weeks':sorted(PAUSE_WEEKS),
         'quantiles':rows,'det_active':det_active,'det_calendar':det_calendar,
         'det_date':finish_date(det_active).isoformat(),'det_probability':det_probability,
         'lab5_deadline':deadline.isoformat(),'lab5_probability':deadline_probability,
         'expanded_backlog_p85':quantile(expanded,.85)}
(RESULTS/'results.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print('Тексерулер өтті. Нәтижелер:',RESULTS.resolve())