(() => {
  const maps = (q) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  window.TRIP_DATA = {
    days: [
      { id: "all", label: "Tất cả", sticker: "🗺️" },
      {
        id: "1",
        label: "Ngày 1",
        weekday: "Thứ Bảy",
        date: "SG → Long Hải",
        theme: "Tới biển & hoàng hôn",
        sticker: "🌊",
        tone: "blue"
      },
      {
        id: "2",
        label: "Ngày 2",
        weekday: "Chủ Nhật",
        date: "Về Sài Gòn",
        theme: "Sáng biển · về nhà",
        sticker: "🌅",
        tone: "amber"
      }
    ],
    types: [
      { id: "all", label: "Tất cả loại", sticker: "✨" },
      { id: "attraction", label: "Tham quan", sticker: "🏖️" },
      { id: "food", label: "Ăn uống", sticker: "🦐" },
      { id: "transport", label: "Di chuyển", sticker: "🚙" },
      { id: "rest", label: "Nghỉ", sticker: "😴" },
      { id: "hotel", label: "Chỗ ở", sticker: "🏨" }
    ],
    foods: [
      {
        id: "f1-lunch",
        day: "1",
        meal: "Trưa",
        title: "Long Hải — vừa tới",
        recommend: [
          {
            name: "Hải sản ven biển (trung tâm)",
            address: "Khu bãi biển Long Hải",
            note: "Gỏi cá, tôm hấp, canh chua · hỏi giá trước · order vừa vì tối còn dinner.",
            maps: maps("nhà hàng hải sản Long Hải Bà Rịa Vũng Tàu")
          },
          {
            name: "Cơm biển / canh chua cá",
            address: "Gần bãi",
            note: "Nhẹ bụng sau 2 giờ ngồi xe · uống nước dừa.",
            maps: maps("cơm hải sản Long Hải")
          }
        ],
        avoid: "Đừng order set quá lớn ngày đầu. Tránh nhậu trưa nếu còn lái nội thị.",
        place: "Long Hải",
        maps: maps("nhà hàng hải sản Long Hải Bà Rịa Vũng Tàu"),
        price: "₫250–450k / 2 người"
      },
      {
        id: "f1-dinner",
        day: "1",
        meal: "Tối",
        title: "Tối hải sản — ngày 1",
        recommend: [
          {
            name: "Hải sản nướng / hấp",
            address: "Ven biển Long Hải",
            note: "Tôm, mực, nghêu, cá · ăn ~18:30 trước khi đông · mang tiền mặt.",
            maps: maps("hải sản nướng Long Hải")
          },
          {
            name: "Ốc / nhậu nhẹ",
            address: "Phố biển",
            note: "Chỉ nếu còn sức sau đồi · đừng quá muộn.",
            maps: maps(" quán ốc Long Hải Bà Rịa")
          }
        ],
        avoid: "Rượu nhiều + nắng ngày mai = mệt.",
        place: "Long Hải",
        maps: maps("hải sản Long Hải buổi tối"),
        price: "₫400–700k / 2 người"
      },
      {
        id: "f2-breakfast",
        day: "2",
        meal: "Sáng",
        title: "Breakfast nhẹ trước biển",
        recommend: [
          {
            name: "Bánh mì / cafe ven đường",
            address: "Gần chỗ ở",
            note: "Nhanh, no vừa · ra biển trước 08:30 khi nắng còn dễ chịu.",
            maps: maps("bánh mì cafe Long Hải")
          },
          {
            name: "Phở / hủ tiếu",
            address: "Thị trấn Long Hải",
            note: "Nếu muốn ngồi lâu hơn trước check-out.",
            maps: maps("phở Long Hải Bà Rịa")
          }
        ],
        avoid: "Đừng ăn quá no nếu còn tắm biển.",
        place: "Long Hải",
        maps: maps("ăn sáng Long Hải"),
        price: "₫60–120k / 2 người"
      },
      {
        id: "f2-brunch",
        day: "2",
        meal: "Trưa",
        title: "Brunch rồi về SG",
        recommend: [
          {
            name: "Hải sản lần cuối (nhẹ)",
            address: "Long Hải",
            note: "1–2 món share rồi lên xe · tránh no quá dễ buồn ngủ lái.",
            maps: maps("nhà hàng hải sản Long Hải")
          },
          {
            name: "Cơm gà / quán bình dân",
            address: "Gần quốc lộ về",
            note: "Nhanh, rẻ khi bắt đầu về SG.",
            maps: maps("cơm gà gần Long Hải")
          }
        ],
        avoid: "Không nhậu trưa nếu đang lái về.",
        place: "Long Hải / dọc đường về",
        maps: maps("Long Hải Bà Rịa Vũng Tàu"),
        price: "₫200–400k / 2 người"
      }
    ],
    items: [
      {
        id: "d1-depart",
        day: "1",
        time: "07:00",
        end: "09:30",
        title: "Xuất phát Sài Gòn → Long Hải",
        type: "transport",
        price: 150000,
        baby: true,
        prebook: false,
        place: "~120 km · cao tốc Long Thành · 2–2,5 giờ",
        notes: [
          "Xuất phát trước 07:30 để tránh kẹt Long Thành",
          "Cao tốc Long Thành → DT994 / QL51 hướng Long Hải",
          "ETC + xăng đủ · kiểm tra lốp",
          "1 stop toilet giữa đường nếu có bé"
        ],
        link: "",
        maps: "https://www.google.com/maps/dir/?api=1&origin=Ho+Chi+Minh+City&destination=Long+Hai+Ba+Ria+Vung+Tau"
      },
      {
        id: "d1-checkin",
        day: "1",
        time: "09:30",
        end: "10:15",
        title: "Tới chỗ ở — gửi đồ / check-in sớm",
        type: "hotel",
        price: 0,
        baby: true,
        prebook: true,
        place: "Resort / homestay ven biển",
        notes: [
          "Book phòng cách biển &lt;5 phút đi bộ",
          "Chưa tới giờ check-in: gửi hành lý, đổi đồ tắm",
          "Hỏi wifi, gửi xe, hồ bơi"
        ],
        eat: "",
        link: "",
        maps: maps("resort biển Long Hải Bà Rịa Vũng Tàu")
      },
      {
        id: "d1-beach",
        day: "1",
        time: "10:15",
        end: "12:15",
        title: "Biển Long Hải — tắm &amp; nằm cát",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi biển Long Hải",
        notes: [
          "Kem chống nắng + mũ + nước uống",
          "Sóng tương đối êm hơn Vũng Tàu; vẫn chú ý trẻ nhỏ",
          "Thuê ghế / dù nếu cần — hỏi giá trước",
          "Đừng để điện thoại không người trông"
        ],
        link: "",
        maps: maps("Bãi biển Long Hải")
      },
      {
        id: "d1-lunch",
        day: "1",
        time: "12:15",
        end: "13:30",
        title: "Trưa hải sản",
        type: "food",
        price: 350000,
        baby: true,
        prebook: false,
        place: "Quán ven biển",
        notes: [
          "Order vừa — tối còn dinner",
          "Hỏi giá món trước khi order",
          "Ưu tiên hấp / nướng / canh chua"
        ],
        eat: "Gỏi cá, tôm hấp, canh chua",
        link: "",
        maps: maps("nhà hàng hải sản Long Hải")
      },
      {
        id: "d1-rest",
        day: "1",
        time: "13:30",
        end: "16:00",
        title: "Nghỉ trưa · hồ bơi / phòng",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Chỗ ở",
        notes: [
          "Giờ vàng tránh nắng gắt",
          "Ngủ ngắn 45–90 phút hoặc hồ bơi",
          "Sạc điện thoại + chuẩn bị nước cho chiều"
        ],
        link: "",
        maps: ""
      },
      {
        id: "d1-hill",
        day: "1",
        time: "16:00",
        end: "17:45",
        title: "Đồi Núi Nữa / view biển chiều",
        type: "attraction",
        price: 50000,
        baby: false,
        prebook: false,
        place: "Núi Nữa · Long Hải",
        notes: [
          "Đi xe lên — mang dép bám tốt nếu leo bộ đoạn ngắn",
          "View biển + gió chiều đẹp hơn trưa",
          "Bé mệt → bỏ, dạo Lăng Ông Nam Hải / phố biển",
          "Không cần thêm điểm Vũng Tàu nếu đã mệt"
        ],
        link: "",
        maps: maps("Núi Nữa Long Hải")
      },
      {
        id: "d1-sunset",
        day: "1",
        time: "17:45",
        end: "18:30",
        title: "Hoàng hôn trên bãi",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi biển Long Hải",
        notes: [
          "Mang áo khoác mỏng — gió biển mát",
          "Chụp ảnh nhanh rồi về ăn tối",
          "Không tắm lúc trời tối"
        ],
        link: "",
        maps: maps("Bãi biển Long Hải")
      },
      {
        id: "d1-dinner",
        day: "1",
        time: "18:30",
        end: "20:30",
        title: "Tối hải sản + về nghỉ",
        type: "food",
        price: 550000,
        baby: true,
        prebook: false,
        place: "Quán hải sản Long Hải",
        notes: [
          "Ăn sớm tránh đông",
          "Uống vừa — sáng còn biển",
          "Về phòng ~20:30, ngủ sớm"
        ],
        eat: "Tôm, mực, nghêu, cá nướng",
        link: "",
        maps: maps("hải sản nướng Long Hải")
      },
      {
        id: "d2-sunrise",
        day: "2",
        time: "06:30",
        end: "08:00",
        title: "Sáng sớm trên biển (tuỳ sức)",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi biển Long Hải",
        notes: [
          "Bình minh / chạy bộ / cafe nhìn sóng",
          "Nếu mệt: ngủ thêm, bỏ mục này",
          "Mang nước và kem chống nắng nhẹ"
        ],
        link: "",
        maps: maps("Bãi biển Long Hải")
      },
      {
        id: "d2-breakfast",
        day: "2",
        time: "08:00",
        end: "09:00",
        title: "Ăn sáng",
        type: "food",
        price: 90000,
        baby: true,
        prebook: false,
        place: "Gần chỗ ở",
        notes: [
          "Bánh mì + cafe hoặc phở",
          "No vừa — còn tắm biển ngắn"
        ],
        eat: "Bánh mì / phở / cafe",
        link: "",
        maps: maps("ăn sáng Long Hải")
      },
      {
        id: "d2-beach2",
        day: "2",
        time: "09:00",
        end: "10:30",
        title: "Biển lần cuối + check-out",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi biển + chỗ ở",
        notes: [
          "Tắm ngắn, thu đồ",
          "Check-out đúng giờ; gửi vali nếu còn brunch",
          "Kiểm tra không quên sạc / kính / dép"
        ],
        link: "",
        maps: maps("Bãi biển Long Hải")
      },
      {
        id: "d2-brunch",
        day: "2",
        time: "10:30",
        end: "12:00",
        title: "Brunch hải sản nhẹ",
        type: "food",
        price: 300000,
        baby: true,
        prebook: false,
        place: "Long Hải",
        notes: [
          "1–2 món share rồi lên xe",
          "Không nhậu nếu đang lái",
          "Mua nước / snack cho đoạn đường về"
        ],
        eat: "Hải sản nhẹ hoặc cơm",
        link: "",
        maps: maps("nhà hàng hải sản Long Hải")
      },
      {
        id: "d2-return",
        day: "2",
        time: "12:00",
        end: "14:30",
        title: "Về Sài Gòn (cao tốc)",
        type: "transport",
        price: 150000,
        baby: true,
        prebook: false,
        place: "Long Hải → Long Thành → SG · ~2–2,5 giờ",
        notes: [
          "Xuất phát trước 13:00 nếu sợ kẹt chiều CN",
          "Phí cao tốc chiều về — xem bảng Cao tốc",
          "Nghỉ toilet một lần nếu buồn ngủ",
          "Giữ tốc độ, không vội"
        ],
        link: "",
        maps: "https://www.google.com/maps/dir/?api=1&origin=Long+Hai+Ba+Ria+Vung+Tau&destination=Ho+Chi+Minh+City"
      }
    ],
    tickets: [
      {
        id: "t-hotel",
        title: "Book phòng 1 đêm (ven biển)",
        meta: "Ưu tiên &lt;5 phút tới bãi · hủy linh hoạt nếu được",
        price: "₫600–1.500k / đêm",
        url: maps("resort homestay Long Hải Bà Rịa Vũng Tàu")
      },
      {
        id: "t-etc",
        title: "ETC đủ tiền (ePass / VETC)",
        meta: "Cao tốc Long Thành · dự trù ~₫200–350k cả chuyến 2 chiều",
        price: "~₫250k",
        url: "https://www.google.com/maps/search/?api=1&query=tram+nap+ETC+VETC"
      },
      {
        id: "t-car",
        title: "Xe riêng / thuê xe tự lái",
        meta: "Đổ đầy bình · kiểm tra lốp · ghế trẻ em nếu có bé",
        price: "Xăng ~₫250–400k khứ hồi",
        url: "https://www.google.com/maps/search/?api=1&query=cay+xang+gan+day"
      },
      {
        id: "t-sun",
        title: "Kem chống nắng + mũ + dép biển",
        meta: "Mang từ nhà — đừng mua đắt ở bãi",
        price: "₫0 nếu đã có",
        url: ""
      },
      {
        id: "t-optional-vt",
        title: "(Tuỳ) Thêm điểm Vũng Tàu",
        meta: "Chỉ nếu còn sức ngày 1 — cách ~20–25 phút",
        price: "Thêm thời gian + xăng",
        url: maps("Vũng Tàu"),
        optional: true
      }
    ],
    ticketSkip: [
      "Vé tham quan biển — hầu hết free",
      "Tour ghép nhồi lịch",
      "Nhồi cả Vũng Tàu trong 2N1Đ nếu chỉ muốn chill",
      "Fastfood làm bữa chính thay hải sản"
    ],
    budgetMeta: {
      kicker: "Gợi ý chi tiêu · 2 người · 2N1Đ",
      rate: "Xe riêng · cao tốc Long Thành · 1 đêm ven biển",
      examples: "Kiểm tra xăng / ETC trước mỗi chặng · KS có chỗ đậu oto",
      note: "Ngân sách dưới đây là mức mid — chưa gồm mua sắm."
    },
    budget: [
      { id: "hotel", label: "Phòng 1 đêm", amount: 1000000, note: "Resort/homestay ước", group: "fixed" },
      { id: "food", label: "Ăn uống 2 ngày", amount: 1290000, note: "Hải sản mid · 2 người", group: "daily" },
      { id: "toll", label: "Cao tốc 2 chiều", amount: 250000, note: "Long Thành · ước", group: "car" },
      { id: "fuel", label: "Xăng khứ hồi", amount: 350000, note: "~240 km cả chuyến", group: "car" },
      { id: "misc", label: "Gửi xe / ghế / nước", amount: 150000, note: "Lặt vặt", group: "daily" },
      { id: "buffer", label: "Buffer", amount: 300000, note: "Phòng hờ", group: "tickets" }
    ],
    tolls: {
      vehicle: "Xe dưới 12 chỗ (nhóm 1)",
      note: "Ước tính ETC cho chặng SG ↔ Long Hải qua cao tốc Long Thành. Mức thực tế thay đổi theo trạm / thời điểm — kiểm tra app trước ngày đi.",
      segments: [
        {
          id: "hcm-lt",
          name: "TP.HCM → Long Thành / hướng BR-VT",
          km: "~50–70",
          oneWay: 90000,
          note: "Ước ~₫70–110k/lượt tùy điểm vào/ra"
        },
        {
          id: "lt-lh",
          name: "Long Thành → Long Hải (ĐT/QL nối)",
          km: "~40–50",
          oneWay: 35000,
          note: "Một phần quốc lộ có thể không thu phí · phí ước nếu còn đoạn BOT"
        }
      ],
      legs: [
        {
          id: "leg-d1",
          label: "Ngày 1 · Đi SG → Long Hải",
          segmentIds: ["hcm-lt", "lt-lh"],
          note: "Chiều đi · ETC sẵn"
        },
        {
          id: "leg-d2",
          label: "Ngày 2 · Về Long Hải → SG",
          segmentIds: ["lt-lh", "hcm-lt"],
          note: "Chiều về · tránh giờ kẹt CN nếu được"
        }
      ]
    }
  };
})();
