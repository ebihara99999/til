#include <stdio.h>
#include <string.h>

typedef struct
{
	char name[256]; /* 名前 */
	int age;				/* 年齢 */
	int sex;				/* 性別 */

} person;

int InputPerson(person *pdata);
int OutputPerson(person *pdata);

int main(void)
{
	person data;
	person *pdata;

	pdata = &data; /* 初期化 */
	InputPerson(pdata);
	OutputPerson(pdata);

	return 0;
}

int InputPerson(person *pdata)
{
	printf("名前を入力してください\n");
	scanf("%s", pdata->name);
	printf("年齢を入力してください\n");
	scanf("%d", &pdata->age);
	printf("性別を入力してください。男性は1、女性は2です。\n");
	scanf("%d", &pdata->sex);
}

int OutputPerson(person *pdata)
{
	printf("名前：%s\n", pdata->name);
	printf("年齢：%d\n", pdata->age);
	printf
		("性別：%s\n", pdata->sex == 1 ? "男性" : "女性");
}
