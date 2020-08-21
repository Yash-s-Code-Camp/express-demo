#include <iostream>
using namespace std;

class Box
{
public:
    double l, b, h;

    Box(double l, double b, double h)
    {
        this->l = l;
        this->b = b;
        this->h = h;
    }
    Box(double l)
    {
        this->l = l;
    }
};

int main()
{
    double l = 0, b = 0, h = 0;

    cout << endl
         << endl;
    cout << "Enter value for l: ";
    cin >> l;
    cout << "Enter value for b: ";
    cin >> b;
    cout << "Enter value for h: ";
    cin >> h;

    Box box1(l, b, h); // calling constructor
    Box box2(l);       // calling constructor

    cout << box1.l << endl;
    cout << box1.h << endl;
    cout << box1.b << endl;

    cout << box2.l << endl;
    cout << box2.h << endl;
    cout << box2.b << endl;

    return 0;
}

//method overloading