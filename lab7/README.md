# GadgetStore · 7-апта

Зулпыхаров Ерасыл · АЖ-43 · 15.10.2026

Негізгі есеп: GadgetStore_Lab7.pdf. Өңделетін нұсқа: GadgetStore_Lab7.md.
RAID.json: 24 тәуекел, 4 болжам, 4 мәселе, 3 тәуелділік.
Threat Dragon: GadgetStore_ThreatDragon.json (2.6.2 / v2 schema valid, UI import not verified).
backlog-lab7.md: 3 жоспарланған mitigation тапсырмасы.

## Тексеру шектеулері

- Pre-mortem - кодқа негізделген жеке талдау; команда сессиясы өткізілді деп мәлімделмейді.
- Trivy: misconfig және secret; CVE/image/SBOM тексеруі орындалмады.
- Gitleaks: directory snapshot, стандартты ережелер; git тарихы жоқ. Нөл нәтиже қауіпсіздік кепілі емес.
- Trivy: DS-0002 (HIGH) → R14, DS-0026 (LOW) → R11. Legacy пароль қолмен анықталды → R12.
- API тесті өтті. Қауіпсіздік түзетулері, restore және жүктеме тесттері бэклогта.
- Threat Dragon UI тексеруі браузер URL анықтау шектеуінен тоқтады. JSON ресми схемамен тексерілді.

## Қайта орындау

Құралдар: Gitleaks 8.30.1, Trivy 0.76.0, Node >=22.13.0.
source-manifest.json тізіміндегі бастапқы файлдарды scan-source каталогына дәл сол салыстырмалы жолмен көшіріп, SHA-256 хэштерін салыстырыңыз.

```powershell
gitleaks dir scan-source --redact=100 --report-format json --report-path gitleaks.json --no-banner
trivy fs --scanners misconfig,secret --skip-check-update --format json --output trivy.json scan-source
node --test tests/api.cjs
```

API тестін жоба түбірінен орындау керек. Сканердің базалары/нұсқалары ауысса нәтиже де өзгеруі мүмкін.
Түпкілікті есептер evidence ішінде; source snapshot және executable файлдар ZIP-ке енгізілмеді.
