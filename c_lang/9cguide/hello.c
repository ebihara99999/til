#include <stdio.h>

int main(void)
{
		int price;
		scanf("%d", &price);
		printf("一割引き: %d, 三割引き: %d, 五割引: %d, 八割引: %d\n",
						(int)(price * 0.9), (int)(price * 0.7), (int)(price * 0.5), (int)(price * 0.2));
		return 0;
}
