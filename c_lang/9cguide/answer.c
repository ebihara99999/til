#include <stdio.h>
#include <string.h>

int main(void)
{
	char first_name[32];
	char last_name[32];

	scanf("%32s %32s", first_name, last_name);
	printf("%s\n", strcat(first_name, last_name));
	return 0;
}
