import React, { useEffect } from 'react';

const OrderSuccessPending = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: 800,
          margin: 'auto auto',
        }}
      >
        <div
          style={{
            width: 800,
            margin: '24px auto',
            borderRadius: 3,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p
              style={{
                fontSize: 14,
                color: 'rgb(16 185 129)',
                fontWeight: 'bold',
                padding: '16px 8px',
                cursor: 'pointer',
              }}
            >
              Trang chu
            </p>
            <p
              style={{
                fontSize: 14,
                color: 'rgb(16 185 129)',
                fontWeight: 'bold',
                padding: '16px 8px',
                cursor: 'pointer',
              }}
            >
              Nhan voucher
            </p>
            <p
              style={{
                fontSize: 14,
                color: 'rgb(16 185 129)',
                fontWeight: 'bold',
                padding: '16px 8px',
                cursor: 'pointer',
              }}
            >
              Top sale
            </p>
            <p
              style={{
                fontSize: 14,
                color: 'rgb(16 185 129)',
                fontWeight: 'bold',
                padding: '16px 8px',
                cursor: 'pointer',
              }}
            >
              San pham lien quan
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://i.pinimg.com/736x/65/c4/9e/65c49ea860d0a6ce361b44d11e8924f2.jpg"
              style={{ width: 150, height: 120, borderRadius: 50 }}
            />
          </div>

          <div style={{ padding: 24 }}>
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: 'rgb(16 185 129)',
                  fontSize: 24,
                  marginTop: 0,
                }}
              >
                Dat hang thanh cong !
              </p>
            </div>
            <div>
              <p style={{ marginBottom: 16 }}>Xin chao vinh tu,</p>

              <p style={{ marginBottom: 16, fontSize: 14 }}>
                Store da nhan duoc yeu cau dat hang cua ban va dang cho xu ly,
                ban xe nhan thongo bao tiep theo khi don hang duoc gia
              </p>
              <p style={{ fontSize: 14 }}>
                <span style={{ fontWeight: 'bold' }}>Luu y: </span> Ban nen chi
                nhan don hang khi da co xac nhan giao hang tu store shop. Tranh
                gia mao don hang
              </p>
            </div>
          </div>
          <div
            style={{ width: '100%', height: 1, backgroundColor: '#F5F4F3' }}
          ></div>

          {Array(2)
            .fill(1)
            .map((item) => (
              <div>
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <i
                      class="fa fa-truck"
                      style={{ fontSize: 18, marginRight: 8 }}
                    ></i>
                    <span style={{ fontSize: 14 }}>
                      Ap 1, phu tan, dinh quan dong nai
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <i
                      class="fa fa-ticket"
                      style={{ fontSize: 18, marginRight: 8 }}
                    ></i>
                    <span style={{ fontSize: 14 }}>Kien hang</span>
                  </div>
                  <div style={{ display: 'flex', marginBottom: 16 }}>
                    <p style={{ fontSize: 12, marginRight: 24 }}>
                      Danh muc: Giay nam
                    </p>
                    <p style={{ fontSize: 12 }}>Thuong hieu: Adidas</p>
                  </div>
                  <div style={{ display: 'flex', marginBottom: 16 }}>
                    <div style={{ marginRight: 24 }}>
                      <img
                        style={{ width: 120, height: 120 }}
                        src="https://giaynation.com/wp-content/uploads/2017/09/ad-023-534x400.jpg"
                      />
                    </div>
                    <div>
                      <p
                        style={{ fontSize: 14, marginTop: 0, marginBottom: 8 }}
                      >
                        Giày Nation Giày Adidas Super Star Trắng - Shop Giày
                        Adidas Giá Rẻ | Giày Nation
                      </p>
                      <p
                        style={{
                          color: '#ff502f',
                          fontSize: 12,
                          marginTop: 0,
                          marginBottom: 8,
                        }}
                      >
                        233.004VND{' '}
                        <span style={{ color: 'black', marginLeft: 16 }}>
                          X1
                        </span>
                      </p>
                      {/* <p style={{ fontSize: 12, marginTop: 0, marginBottom: 8 }}>
         So luong : 1
       </p> */}
                      <p
                        style={{ fontSize: 12, marginTop: 0, marginBottom: 8 }}
                      >
                        Ship : 23.000 vnd
                      </p>
                      <p
                        style={{ fontSize: 12, marginTop: 0, marginBottom: 8 }}
                      >
                        Voucher :{' '}
                        <span
                          style={{
                            color: '#ff502f',
                          }}
                        >
                          -23.000 vnd
                        </span>
                      </p>
                      <p
                        style={{ fontSize: 12, marginTop: 0, marginBottom: 8 }}
                      >
                        Tong tien : 233.004 vnd
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#F5F4F3',
                  }}
                ></div>
              </div>
            ))}
          <div style={{ padding: 24 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 18 }}>***Luu Y</span>
            </div>
            <p style={{ fontSize: 14 }}>
              Chi nhan don hang da duoc shop kiem dinh va o trang thai giao
              hang. Tranh nhan hang khi khong co xac nhan tu shop nham bao ve
              tai san cua ban than Neu co van de ve don hang , hay lien he
              support de duoc tu van mien phi.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 16,
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 48,
                  marginRight: 8,
                  borderRadius: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ff502f',
                }}
              >
                <p style={{ fontSize: 12, color: 'white' }}>Tu van mien phi</p>
              </div>
              <div
                style={{
                  width: 200,
                  height: 48,
                  marginRight: 8,
                  borderRadius: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(16 185 129)',
                }}
              >
                <p style={{ fontSize: 12, color: 'white' }}>
                  Cac cau hoi thuong gap
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontSize: 28,
                color: '#348498',
                margin: 0,
              }}
            >
              Store Shoes
            </p>
            <p style={{ fontSize: 12 }}>
              0283-458-999, 350 phuong Tan Uyen, thi xa Ben Cat, tinh Binh Duon
            </p>
          </div>
          <p style={{ fontSize: 14, color: '#348498' }}>
            *** Day chi la thu thong bao , vui long khong tra loi thu nay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPending;
