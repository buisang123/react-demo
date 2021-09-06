class Thongtin extends React.Component{
  render(){
    return   <table className = "bangttcanhan">
                <tr>
                  <td colspan="1" rowspan="9">
                    <AnhCaNhan ></AnhCaNhan>
                  </td>
                  <td>
                    <Ten>Bùi Đức Sang</Ten>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CongViec>inter front end</CongViec>
                  </td>
                </tr>
                <NgaySinh ngaysinh = "Ngày sinh:">17/02/1998</NgaySinh>
                <GioiTinh gioitinh = "Giới tính:">Nam</GioiTinh>
                <DienThoai dienthoai = "Điện Thoại:">0343804400</DienThoai>
                <Gmail gmail = "Gmail:">bducsang123@gmail.com</Gmail>
                <DiaChi diachi = "Địa Chỉ:">Số 143 - Chiến Thắng -Thành Trì Hà Nội</DiaChi>
             </table>
  };
};

class AnhCaNhan extends React.Component{
  render(){
    return <div style = {{"width": "110px"}} ><img className = "anhcanhan" src = "image/IMG_0860.JPG"/></div>
  };
};

class Ten extends React.Component{
  render(){
    return <span colspan="1" className = "ten" > {this.props.children} </span>
  };
};

class CongViec extends React.Component{
  render(){
    return <span className = "congviec">{this.props.children}</span>
  };
};

class NgaySinh extends React.Component{
  render(){
    return <tr>
              <td>
                <span className = "indam">{this.props.ngaysinh}</span>
                <span style = {{"margin-left": "30px"}}>{this.props.children}</span>
              </td>
           </tr>
  };
};

class GioiTinh extends React.Component{
  render(){
    return <tr>
              <td>
                <span className = "indam">{this.props.gioitinh}</span>
                <span style = {{"margin-left": "40px"}}>{this.props.children}</span>
              </td>
           </tr>
  };
};

class DienThoai extends React.Component{
  render(){
    return <tr>
              <td>
                <span className = "indam">{this.props.dienthoai}</span>
                <span style = {{"margin-left": "24px"}}>{this.props.children}</span>
              </td>
           </tr>
  };
};

class Gmail extends React.Component{
  render(){
    return <tr>
              <td>
                <span className = "indam">{this.props.gmail}</span>
                <span style = {{"margin-left": "60px"}}>{this.props.children}</span>
              </td>
           </tr>
  };
};



class DiaChi extends React.Component{
  render(){
    return <tr>
              <td>
                <span className = "indam">{this.props.diachi}</span>
                <span style = {{"margin-left": "50px"}}>{this.props.children}</span>
              </td>
           </tr>
  };
};

class MucTieu extends React.Component{
  render(){
    return <div className = "tieude">
                <h5 className = "indam">Mục Tiêu Nghề Nghiệp</h5>
                <hr/>
                <div>Vận dụng những kiến thức HTML-CSS đã được học
                  <div>Rèn luyện khả năng làm việc nhóm.</div>
                </div>
           </div>
  };
};

class HocVan extends React.Component{
  render(){
    return <div className = "tieude">
                <h5 className = "indam">Học Vấn</h5>
                <hr/>
                <div className = "row" style={{"padding-left": "14px"}}>
                  <div>10/2016 - nay</div>
                  <div className = "noihoctap">
                    <span className="indam">Học Viện Kỹ Thuật Mật Mã</span>
                    <span>Chuyên ngành: Công Nghệ Thông Tin</span>
                    <span>Điểm trung bình: 2.3/4</span>
                  </div>
                </div>
           </div>
  };
};

class QuanTrinhHocTap extends React.Component{
  render(){
    return <div className = "tieude">
                <h5 className = "indam">Quá Trình Học Tập</h5>
                <hr/>
                <div className = "row" style={{"padding-left": "14px"}}>
                  <div>10/2016 - nay</div>
                  <div className = "noihoctap">
                    <span className="indam">Trung tâm MindX</span>
                    <span>Học Viên</span>
                    <span>- Ngôn ngữ lập trình Python cơ bản.</span>
                    <span>- HTML - CSS cơ bản.</span>
                    <span>- Javacript cơ bản.</span>
                    <span>- Làm quen với các framework cơ bản: bootstrap.</span>
                    <span>- Bài tập cuối khóa website có chức năng cơ trả lời câu hỏi</span>
                  </div>
                </div>
           </div>
  };
};

class SoThich extends React.Component{
  render(){
    return <div className = "tieude" >
                <h5 className = "indam">Mục Tiêu Nghề Nghiệp</h5>
                <hr/>
                <div style={{"padding-bottom": "80px"}}>Game(AOE, LOL),
                  <div>Cầu Lông, bóng đá - Tham gia hoạt động đá bóng của công ty hàng tuần</div>
                </div>
           </div>
  };
};

ReactDOM.render(
<div className = "noidung">
  <div className = "ttcanhan">
    <Thongtin/>
    <MucTieu/>
    <HocVan/>
    <QuanTrinhHocTap/>
    <SoThich/>
  </div>
</div>
,document.getElementById('root'));