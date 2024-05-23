#include <stdio.h>

int main(void)
{
	int array[10];
	int i;
	for(i = 0; i < sizeof(array) / sizeof(int); i++) {
		scanf("%d", &array[i]);
	}

	for(int i = sizeof(array) / sizeof(int); i >= 0; i--) {
		printf("%d\n", array[i]);
	}
	return 0;
}
