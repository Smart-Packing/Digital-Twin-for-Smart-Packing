from truckSack import *
import nose

# Test Case 1
def test_simple():
	assert truckSack(50, [10, 20, 30], [60, 100, 120], 3) == 220