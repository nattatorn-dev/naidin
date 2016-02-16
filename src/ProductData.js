module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('book', JSON.stringify([
      {
        id: '001',
        name: ' books',
        description: 'books',
        books: [
          {
            _id: 1,
            id: '1',
            type: '1',
            book_name: 'แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์',
            price: 100.00,
            inventory: 9999
          },
          {
            _id: 2,
            id: '2',
            type: '2',
            book_name: 'แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ',
            price: 100.00,
            inventory: 9999
          },
          {
            _id: 3,
            id: '3',
            type: '3',
            book_name: 'แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน',
            price: 100.00,
            inventory: 9999
          },
          {
            _id: 4,
            id: '4',
            type: '4',
            book_name: 'แฮร์รี่ พอตเตอร์กับถ้วยอัคนี',
            price: 100.00,
            inventory: 9999

          },
          {
            _id: 5,
            id: '5',
            type: '5',
            book_name: 'แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์',
            price: 100.00,
            inventory: 9999
          },
          {
            _id: 6,
            id: '6',
            type: '6',
            book_name: 'แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม',
            price: 100.00,
            inventory: 9999
          },
          {
            _id: 7,
            id: '7',
            type: '7',
            book_name: 'แฮร์รี่ พอตเตอร์กับเครื่องรางยมฑูต',
            price: 100.00,
            inventory: 9999
          }
        ]
      }
    ])),
    localStorage.setItem('promotion', JSON.stringify([
      {
        promotion:[
          {
            id: 1,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น',
            duplicate: 2,
            discount: 0.1

          },
          {
            id: 2,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น',
            duplicate: 3,
            discount: 0.2

          },
          {
            id: 3,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น',
            duplicate: 4,
            discount: 0.3

          },
          {
            id: 4,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น',
            duplicate: 5,
            discount: 0.4

          },
          {
            id: 5,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น',
            duplicate: 6,
            discount: 0.5

          },
          {
            id: 6,
            promotion_name: 'ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% ของ 7 เล่มนั้น',
            duplicate: 7,
            discount: 0.6

          }
        ]
      }
    ]));
  }

};
