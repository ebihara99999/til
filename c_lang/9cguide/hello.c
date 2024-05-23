#include <stdio.h>

int main()
{
	int score;
	do
	{
		printf("Enter a score: \n");
		scanf("%d", &score);
	} while (!(score <= 100 && score >= 0));

	printf("Score is %d\n", score);
	return 0;
}
