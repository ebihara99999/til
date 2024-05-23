#include <stdio.h>

int is_olympic_year(int);

int main()
{
	int year;
	printf("Enter a year: \n");
	scanf("%d", &year);
	int result = is_olympic_year(year);

	if (result == 1)
	{
		printf("Olympic year\n");
	}
	else
	{
		printf("Not an Olympic year\n");
	}
}

int is_olympic_year(int year)
{
	int start = 2000;

	if ((year - start) % 4 == 0)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
