import React, { useContext, useState } from "react";
//props
const Example = ({ name, click }) => {

  // hàm có sẵn trong js:
  /**
   *  1. hàm có sẵn trong js:
   *  - Console.log()
   *  - setInterval(func, number): thực thi 1 hành động sau number thời gian (lặp lại)
   *  - setTimeout(func, number): thực thi 1 hành động sau thời gian nhất đinh (chỉ 1 lần)
   *  - Alert() -> check lại
   *  
   * 2. khai báo
   *  var: thay đổi giá trị (scope: global)
   *  let: thay đổi giá trị
   *  const: giữ giá trị
   * 
   * 3. toán tử:
   *  >, <, =
   *  && || ! 
   *  ==, ===
   *  ==: so sánh giá trị
   *  ===: so sánh giá trị, kiểu dữ liệu
   * 
   * 4. tính truthy / falsty
   *  mặc định là false: 0, '', "", undefined, NaN, null
   * 
   * 5. if/ else/ switch/ while
   * 
   * 6. String
   *  + length
   *  + tìm vị trí của 1 chuỗi (indexOf) -> vị trí
   *  + cắt chuỗi: slice(start, end) -> chuỗi
   *  + thay thế: replace()
   *  + trim(): check pass
   *  + viết hoa, thường: toUppercase, toLowerCase
   *  + tách chuỗi/ ghép => split()/ join()
   *  + ký tự tại vị trí nhất định
   * 
   * 7. hàm
   *  + Declaration function: function name () {}
   *  + Expression function
   *  + Arrow function
   *  
   * Callback: hàm truyền vào làm đối số của hàm khác
   * 
   * 8. Mảng
   */
    
        

  return <div onClick={click}>{name}</div>;
};

export default Example;
