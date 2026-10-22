
import pytest
from main import calculate_total


def test_ten_percent_discount():
    assert calculate_total(10000, 10) == 9000


def test_zero_discount():
    assert calculate_total(10000, 0) == 10000


def test_full_discount():
    assert calculate_total(10000, 100) == 0


def test_negative_amount():
    with pytest.raises(ValueError):
        calculate_total(-1000, 10)


def test_invalid_discount():
    with pytest.raises(ValueError):
        calculate_total(10000, 110)
