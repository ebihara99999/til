#include <stdio.h>

int main(void)
{
	int year;
	scanf("%d", &year);
	if (year % 4 == 0) {
		printf("It is an olympic year\n");
	} else {
		printf("It is NOT an olympic year\n");
	}

}
