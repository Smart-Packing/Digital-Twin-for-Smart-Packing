# A Dynamic Programming based Python Program for 0-1 Knapsack problem
'''
Returns the list of packages with the maximum distance that can be put in a truck of 
volume V
Dimension are in the order of l(cm)*b(cm)*h(cm) for the packages = p.
Distance are in the order of Kilometers (assuming source is the warehouse [location 0] and
the destination [location x] is the drop-off point for each package) = location (x-0) = d
Truck has a volume in the order of L(cm)*B(cm)*H(cm) = V.
'''

def truckSack(V, p, d, n):
	'''
	d = distance in KM each package needs to travel
	p = length * width * height; dimensions of each package (cm*cm*cm)
	V = Length * Width * Height; Volume of Truck (CM*CM*CM)
	n = total number of items

	Returns:
	total_distance = The maximum distance (D) of all the packages that the truck needs to 
	deliver.
	list_of_packages = All the packages that could potentially fit into the truck with the 
	above D
	'''
	T = [[0 for x in range(V + 1)] for x in range(n + 1)]
	list_of_packages = []
	
	# Build table T[][] in bottom up manner
	for i in range(n + 1):
		for j in range(V + 1):
			if i == 0 or j == 0:
				T[i][j] = 0
			elif p[i-1] <= j:
				T[i][j] = max(d[i-1] + T[i-1][j-p[i-1]], T[i-1][j])
			else:
				T[i][j] = T[i-1][j]
	
	# the total result (Distance D)
	res = T[n][V]
	total_distance = res

	# packages that could potentially fit into the truck.
	j = V
	for i in range(n, 0, -1):
		if res <= 0:
			break
		# either the result comes from the
        # top (T[i-1][j]) or from (d[i-1]
        # + T[i-1] [j-p[i-1]]) as in Knapsack
        # table. If it comes from the latter
        # one/ it means the item is included.
		if res == T[i - 1][j]:
			continue
		else:
			# This item is included.
			list_of_packages.append(p[i - 1])

			# Since this weight is included
			# its value is deducted
			res = res - d[i - 1]
			j = j - p[i - 1]

	return total_distance, list_of_packages
