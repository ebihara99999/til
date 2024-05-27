#include <stdio.h>

int minmax(int array[], int *min, int *max);

int main(void)
{
	int i = 0, max = 0, min = 100;
	int array[10];
	printf("Enter a number between 0 and 100:\n");
	printf("Enter -1 to quit\n");
	do
	{
		printf("Number %d:\n", i + 1);
		scanf("%d", &array[i]);
		i++;
	} while (array[i - 1] != -1);

	minmax(array, &min, &max);
	printf("Max value is %d\nMin value is %d.\n", max, min);
	return 0;
}

int minmax(int array[], int *min, int *max)
{
	int i = 0;
	while (array[i] != -1)
	{
		if (array[i] > *max)
		{
			*max = array[i];
		}
		if (array[i] < *min)
		{
			*min = array[i];
		}
		i++;
	}
}
