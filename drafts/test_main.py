import pytest

from main import sum_nums, sanitize_phone


def test_sum_nums():
    nums = [1, 2, 3]

    sum_ = sum_nums(*nums)

    assert sum_ == 6


@pytest.fixture()
def nums():
    return [1, 2, 3]


def test_sum(nums):
    assert sum(nums) == 6


def test_len(nums):
    assert len(nums) == 3


@pytest.mark.parametrize(
    'raw_phone, valid_phone',
    [
        ('8 985 248 90-52', '79852489052'),
        ('+7 985 248 90-52', '79852489052'),
        ('+7 (985) 248 90-52', '79852489052')
    ]
)
def test_sanitize_phone(raw_phone, valid_phone):
    assert sanitize_phone(raw_phone) == valid_phone
