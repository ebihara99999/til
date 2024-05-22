#include <stdio.h>

int main(void)
{
	float price;
	int change;
	price = (int)((198 * 1 + 138 * 2) * 1.05);
	change = 1000 - price;
	printf("Change is %d\n", change);
	return 0;
}
