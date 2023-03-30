typedef struct
{
    int bookid[5];
    char bookname[20];
    char publisher[20];
    int price;
}BOOK;

int main(){
    BOOK BOOKS[10];

    //첫 번째 도서 데이터
    BOOKS[1].bookid=1;
    strcpy(BOOKS[1].bookname,"축구의 역사");
    strcpy(BOOKS[1].publisher,"굿스포츠");
    BOOKS[1].price=7000;


}
