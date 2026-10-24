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
        title: "Long Hải — vừa tới (trưa)",
        recommend: [
          {
            name: "Quán Ăn Hải Sản Nhi",
            address: "Khu phố Hải Sơn / gần Võ Thị Sáu, TT. Long Hải",
            note: "Nhiều review · tôm nướng, ghẹ hấp, mực hấp gừng, lẩu cá đuối · hỏi giá trước · 08:00–22:00 · 0906 348 211.",
            maps: maps("Quán Ăn Hải Sản Nhi Long Hải Võ Thị Sáu")
          },
          {
            name: "Quán ăn hải sản Hải Phương",
            address: "980 Đường Võ Thị Sáu, TT. Long Hải",
            note: "Gần bãi · phù hợp trưa · ~09:00–21:00 · 0966 598 980.",
            maps: maps("Quán ăn hải sản Hải Phương 980 Võ Thị Sáu Long Hải")
          },
          {
            name: "Quán Ăn Cây Sung",
            address: "188 Đường Hai Bà Trưng, TT. Long Hải",
            note: "Hải sản tươi, bánh xèo hải sản, canh chua · không gian rộng, hợp gia đình.",
            maps: maps("Quán Ăn Cây Sung 188 Hai Bà Trưng Long Hải")
          },
          {
            name: "Gỏi Cá Trích Anh Tuấn",
            address: "TT. Long Hải",
            note: "Đặc sản gỏi cá trích Long Hải · gọi nhỏ share nếu lần đầu.",
            maps: maps("Gỏi Cá Trích Anh Tuấn Long Hải")
          }
        ],
        avoid: "Order vừa — tối còn dinner. Hỏi giá ghẹ/tôm trước khi order.",
        place: "Ven biển Long Hải",
        maps: maps("Quán Ăn Hải Sản Nhi Long Hải"),
        price: "₫250–450k / 2 người"
      },
      {
        id: "f1-dinner",
        day: "1",
        meal: "Tối",
        title: "Tối hải sản — ngày 1",
        recommend: [
          {
            name: "Nhà hàng Đại Dương — Palace Long Hai",
            address: "210 Hai Bà Trưng, KP Hải Phong 1, Long Hải",
            note: "Trong resort, view biển · gỏi cá đục/trích, hải sản nướng · đặt bàn 0254 386 8430 / 0938 156 069 · 06:30–22:00.",
            maps: maps("Nhà hàng Đại Dương Palace Long Hai Resort 210 Hai Bà Trưng")
          },
          {
            name: "Nhà hàng hải sản Tuấn Kiệt",
            address: "972 Đường Võ Thị Sáu, KP Hải Sơn, Long Hải",
            note: "Gần biển · tôm cua mực tươi · không gian thoáng, hợp nhóm.",
            maps: maps("Nhà hàng hải sản Tuấn Kiệt 972 Võ Thị Sáu Long Hải")
          },
          {
            name: "Hải Sản A.Mẫn",
            address: "Khu ẩm thực đêm gần Charm Resort, Long Hải",
            note: "Buổi tối · ~16:00–23:00 · 0379 531 834.",
            maps: maps("Hải Sản A.Mẫn Long Hải Charm Resort")
          },
          {
            name: "Quán ốc Dũng",
            address: "Gần trung tâm TT. Long Hải",
            note: "Ốc / nhậu nhẹ sau hoàng hôn · ~15:00–23:30 · 0917 065 478.",
            maps: maps("Quán ốc Dũng Long Hải")
          }
        ],
        avoid: "Ăn ~18:30 tránh đông. Uống vừa — sáng còn biển.",
        place: "Hai Bà Trưng / Võ Thị Sáu",
        maps: maps("Nhà hàng Đại Dương Palace Long Hai Resort"),
        price: "₫400–700k / 2 người"
      },
      {
        id: "f2-breakfast",
        day: "2",
        meal: "Sáng",
        title: "Breakfast trước biển",
        recommend: [
          {
            name: "Hủ Tiếu Nam Vang Vân Anh 2",
            address: "TT. Long Hải (hủ tiếu hải sản)",
            note: "Hủ tiếu hải sản nổi · no vừa rồi ra biển · rating cao trên Maps.",
            maps: maps("Hủ Tiếu Nam Vang Hủ Tiếu Hải Sản Vân Anh 2 Long Hải")
          },
          {
            name: "Bánh mì / cafe mặt tiền Võ Thị Sáu",
            address: "Đường Võ Thị Sáu, TT. Long Hải",
            note: "Nhanh, gần bãi · ra biển trước 08:30.",
            maps: maps("bánh mì cafe Võ Thị Sáu Long Hải")
          },
          {
            name: "Buffet sáng tại resort (nếu KS có)",
            address: "Palace / Fleur de Lys / Đoàn 298",
            note: "Chỉ nếu đã book gồm breakfast — tiết kiệm thời gian trước check-out.",
            maps: maps("Palace Long Hai Resort")
          }
        ],
        avoid: "Đừng ăn quá no nếu còn tắm biển.",
        place: "Gần chỗ ở / Võ Thị Sáu",
        maps: maps("Hủ Tiếu Hải Sản Vân Anh 2 Long Hải"),
        price: "₫60–150k / 2 người"
      },
      {
        id: "f2-brunch",
        day: "2",
        meal: "Trưa",
        title: "Brunch rồi về SG",
        recommend: [
          {
            name: "Quán ăn gia đình Hải Hưng",
            address: "822 Nguyễn Tất Thành, TT. Long Hải",
            note: "Cơm gia đình + hải sản · không gian rộng · dễ đậu xe trước khi về.",
            maps: maps("Quán ăn gia đình Hải Hưng 822 Nguyễn Tất Thành Long Hải")
          },
          {
            name: "Quán Ăn Thảo Ốc",
            address: "459 Đường Nguyễn Tất Thành, Long Hải",
            note: "Ốc / món nhẹ · 10:00–22:00 · 0993 724 738 · gọi ít rồi lên xe.",
            maps: maps("Quán Ăn Thảo Ốc 459 Nguyễn Tất Thành Long Hải")
          },
          {
            name: "Hải Phương (lần 2 nếu thích)",
            address: "980 Võ Thị Sáu",
            note: "1–2 món share · không nhậu nếu đang lái.",
            maps: maps("Quán ăn hải sản Hải Phương 980 Võ Thị Sáu Long Hải")
          }
        ],
        avoid: "Không nhậu trưa nếu đang lái về.",
        place: "Nguyễn Tất Thành / Võ Thị Sáu",
        maps: maps("Quán ăn gia đình Hải Hưng 822 Nguyễn Tất Thành Long Hải"),
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
        place: "Cao tốc Long Thành → QL51 / TL44A · ~120 km",
        notes: [
          "Xuất phát trước 07:30 tránh kẹt Long Thành",
          "Maps đích: Palace Long Hai (210 Hai Bà Trưng) hoặc Dinh Cô",
          "ETC + xăng đủ · kiểm tra lốp",
          "1 stop toilet giữa đường nếu có bé"
        ],
        link: "",
        maps: "https://www.google.com/maps/dir/?api=1&origin=Ho+Chi+Minh+City&destination=Palace+Long+Hai+Resort+210+Hai+Ba+Trung"
      },
      {
        id: "d1-checkin",
        day: "1",
        time: "09:30",
        end: "10:15",
        title: "Check-in / gửi đồ — Palace hoặc Fleur de Lys",
        type: "hotel",
        price: 0,
        baby: true,
        prebook: true,
        place: "Palace Long Hai · 210 Hai Bà Trưng (gợi ý)",
        notes: [
          "Gợi ý 1: Palace Long Hai Resort — 210 Hai Bà Trưng, KP Hải Phong 1 · 0254 386 8430",
          "Gợi ý 2: Fleur de Lys Resort & Spa — 4 Lê Trọng Tấn, Long Hải",
          "Gợi ý 3: Khu nghỉ Đoàn 298 — 189 Hai Bà Trưng (bãi riêng)",
          "Chưa tới giờ: gửi hành lý, đổi đồ tắm, hỏi parking + hồ bơi"
        ],
        eat: "",
        link: "https://palacelonghairesort.vn/",
        maps: maps("Palace Long Hai Resort 210 Hai Bà Trưng Long Hải")
      },
      {
        id: "d1-beach",
        day: "1",
        time: "10:15",
        end: "12:15",
        title: "Bãi biển Dinh Cô / Long Hải",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "36 Đ. Hai Bà Trưng · gần Dinh Cô",
        notes: [
          "Bãi công cộng trước Dinh Cô — kem chống nắng + mũ + nước",
          "Sóng êm hơn Vũng Tàu; vẫn chú ý trẻ nhỏ",
          "Thuê ghế/dù hỏi giá trước",
          "Nếu ở Palace/Đoàn 298: có thể dùng bãi resort"
        ],
        link: "",
        maps: maps("Bãi Biển Dinh Cô 36 Hai Bà Trưng Long Hải")
      },
      {
        id: "d1-lunch",
        day: "1",
        time: "12:15",
        end: "13:30",
        title: "Trưa — Hải Sản Nhi / Hải Phương",
        type: "food",
        price: 350000,
        baby: true,
        prebook: false,
        place: "Võ Thị Sáu / Hai Bà Trưng",
        notes: [
          "Ưu tiên: Hải Sản Nhi hoặc Hải Phương 980 Võ Thị Sáu",
          "Backup: Cây Sung 188 Hai Bà Trưng",
          "Order vừa — tối còn dinner · hỏi giá ghẹ/tôm"
        ],
        eat: "Hải Sản Nhi · Hải Phương · Cây Sung",
        link: "",
        maps: maps("Quán Ăn Hải Sản Nhi Long Hải")
      },
      {
        id: "d1-rest",
        day: "1",
        time: "13:30",
        end: "16:00",
        title: "Nghỉ trưa · hồ bơi resort",
        type: "rest",
        price: 0,
        baby: true,
        prebook: false,
        place: "Palace / Fleur de Lys / Đoàn 298",
        notes: [
          "Giờ vàng tránh nắng gắt",
          "Ngủ ngắn 45–90 phút hoặc hồ bơi vô cực (Palace)",
          "Sạc điện thoại + nước cho chiều lên Dinh Cô / Núi Nữa"
        ],
        link: "",
        maps: maps("Palace Long Hai Resort")
      },
      {
        id: "d1-hill",
        day: "1",
        time: "16:00",
        end: "17:45",
        title: "Dinh Cô + Núi Kỳ Vân / view chiều",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Dinh Cô · Hai Bà Trưng, TT. Long Hải",
        notes: [
          "Dinh Cô: di tích quốc gia dưới chân núi Kỳ Vân · ~37 bậc lên điện",
          "Maps: Dinh Cô Long Hải (plus code 96PM+MM4)",
          "Backup nhẹ: Lăng Ông Nam Hải (Dinh Ông) gần bãi",
          "Muốn cao hơn: Núi Nữa / Minh Đạm — chỉ nếu còn sức, mang dép bám"
        ],
        link: "",
        maps: maps("Dinh Cô Long Hải Hai Bà Trưng")
      },
      {
        id: "d1-sunset",
        day: "1",
        time: "17:45",
        end: "18:30",
        title: "Hoàng hôn bãi Dinh Cô",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi biển trước Dinh Cô",
        notes: [
          "Áo khoác mỏng — gió biển mát",
          "Chụp ảnh nhanh rồi về ăn tối",
          "Không tắm lúc trời tối"
        ],
        link: "",
        maps: maps("Bãi Biển Dinh Cô Long Hải")
      },
      {
        id: "d1-dinner",
        day: "1",
        time: "18:30",
        end: "20:30",
        title: "Tối — Đại Dương Palace / Tuấn Kiệt",
        type: "food",
        price: 550000,
        baby: true,
        prebook: false,
        place: "210 Hai Bà Trưng hoặc 972 Võ Thị Sáu",
        notes: [
          "Ưu tiên: Nhà hàng Đại Dương trong Palace — đặt bàn nếu đông",
          "Backup: Tuấn Kiệt 972 Võ Thị Sáu · hoặc A.Mẫn / ốc Dũng",
          "Về phòng ~20:30"
        ],
        eat: "Đại Dương Palace · Tuấn Kiệt · A.Mẫn",
        link: "https://palacelonghairesort.vn/nha-hang/",
        maps: maps("Nhà hàng Đại Dương Palace Long Hai Resort 210 Hai Bà Trưng")
      },
      {
        id: "d2-sunrise",
        day: "2",
        time: "06:30",
        end: "08:00",
        title: "Sáng sớm bãi Dinh Cô (tuỳ sức)",
        type: "attraction",
        price: 0,
        baby: true,
        prebook: false,
        place: "Bãi Biển Dinh Cô",
        notes: [
          "Bình minh / chạy bộ / cafe nhìn sóng",
          "Mệt → ngủ thêm, bỏ mục này",
          "Kem chống nắng nhẹ + nước"
        ],
        link: "",
        maps: maps("Bãi Biển Dinh Cô Long Hải")
      },
      {
        id: "d2-breakfast",
        day: "2",
        time: "08:00",
        end: "09:00",
        title: "Ăn sáng — Vân Anh 2 / bánh mì",
        type: "food",
        price: 90000,
        baby: true,
        prebook: false,
        place: "TT. Long Hải",
        notes: [
          "Ưu tiên: Hủ tiếu hải sản Vân Anh 2",
          "Nhanh: bánh mì cafe Võ Thị Sáu",
          "Hoặc buffet sáng trong resort nếu đã gồm"
        ],
        eat: "Vân Anh 2 · bánh mì Võ Thị Sáu",
        link: "",
        maps: maps("Hủ Tiếu Hải Sản Vân Anh 2 Long Hải")
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
        place: "Bãi resort hoặc Dinh Cô",
        notes: [
          "Tắm ngắn, thu đồ",
          "Check-out đúng giờ; gửi vali nếu còn brunch Hải Hưng",
          "Kiểm tra sạc / kính / dép"
        ],
        link: "",
        maps: maps("Palace Long Hai Resort")
      },
      {
        id: "d2-brunch",
        day: "2",
        time: "10:30",
        end: "12:00",
        title: "Brunch — Hải Hưng 822 Nguyễn Tất Thành",
        type: "food",
        price: 300000,
        baby: true,
        prebook: false,
        place: "822 Nguyễn Tất Thành, TT. Long Hải",
        notes: [
          "Hải Hưng: cơm + hải sản, dễ đậu xe trước khi về",
          "Backup: Thảo Ốc 459 Nguyễn Tất Thành",
          "1–2 món · không nhậu nếu đang lái · mua nước mang theo"
        ],
        eat: "Hải Hưng · Thảo Ốc",
        link: "",
        maps: maps("Quán ăn gia đình Hải Hưng 822 Nguyễn Tất Thành Long Hải")
      },
      {
        id: "d2-return",
        day: "2",
        time: "12:00",
        end: "14:30",
        title: "Về Sài Gòn (cao tốc Long Thành)",
        type: "transport",
        price: 150000,
        baby: true,
        prebook: false,
        place: "Long Hải → Long Thành → SG · ~2–2,5 giờ",
        notes: [
          "Xuất phát trước 13:00 nếu sợ kẹt chiều CN",
          "Maps từ Palace / Hải Hưng về Quận 1 hoặc nhà",
          "Phí cao tốc — xem bảng Cao tốc",
          "1 stop toilet nếu buồn ngủ"
        ],
        link: "",
        maps: "https://www.google.com/maps/dir/?api=1&origin=Palace+Long+Hai+Resort&destination=Ho+Chi+Minh+City"
      }
    ],
    tickets: [
      {
        id: "t-hotel",
        title: "Book phòng 1 đêm — Palace / Fleur de Lys / Đoàn 298",
        meta: "Palace: 210 Hai Bà Trưng · Fleur de Lys: 4 Lê Trọng Tấn · Đoàn 298: 189 Hai Bà Trưng",
        price: "₫800k–2.5tr / đêm (tuỳ hạng)",
        url: maps("Palace Long Hai Resort 210 Hai Bà Trưng")
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
        meta: "Đích Maps: Palace Long Hai hoặc Dinh Cô · ghế trẻ em nếu có bé",
        price: "Xăng ~₫250–400k khứ hồi",
        url: maps("Palace Long Hai Resort")
      },
      {
        id: "t-dinner-book",
        title: "(Tuỳ) Đặt bàn Đại Dương Palace tối Ngày 1",
        meta: "0254 386 8430 / 0938 156 069 · cuối tuần dễ đông",
        price: "₫0 đặt bàn",
        url: "https://palacelonghairesort.vn/nha-hang/",
        optional: true
      },
      {
        id: "t-sun",
        title: "Kem chống nắng + mũ + dép biển",
        meta: "Mang từ nhà — đừng mua đắt ở bãi Dinh Cô",
        price: "₫0 nếu đã có",
        url: ""
      }
    ],
    ticketSkip: [
      "Vé vào bãi Dinh Cô / biển công cộng — free",
      "Vé Dinh Cô (thờ) — thường free / công đức tùy ý",
      "Tour ghép nhồi lịch Vũng Tàu trong 2N1Đ",
      "Fastfood thay hải sản"
    ],
    budgetMeta: {
      kicker: "Gợi ý chi tiêu · 2 người · 2N1Đ",
      rate: "Base gợi ý: <strong>Palace Long Hai</strong> · 210 Hai Bà Trưng",
      examples: "Ăn: Hải Sản Nhi / Cây Sung / Đại Dương · Điểm: Dinh Cô + bãi",
      note: "Ngân sách mid — chỉnh theo hạng phòng thật."
    },
    budget: [
      { id: "hotel", label: "Phòng 1 đêm", amount: 1200000, note: "Palace / Fleur mid", group: "fixed" },
      { id: "food", label: "Ăn uống 2 ngày", amount: 1290000, note: "Hải sản mid · 2 người", group: "daily" },
      { id: "toll", label: "Cao tốc 2 chiều", amount: 250000, note: "Long Thành · ước", group: "car" },
      { id: "fuel", label: "Xăng khứ hồi", amount: 350000, note: "~240 km cả chuyến", group: "car" },
      { id: "misc", label: "Gửi xe / ghế / nước", amount: 150000, note: "Bãi Dinh Cô", group: "daily" },
      { id: "buffer", label: "Buffer", amount: 300000, note: "Phòng hờ", group: "tickets" }
    ],
    tolls: {
      vehicle: "Xe dưới 12 chỗ (nhóm 1)",
      note: "Ước tính ETC cho chặng SG ↔ Long Hải (Palace / Dinh Cô) qua cao tốc Long Thành. Kiểm tra app trước ngày đi.",
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
          name: "Long Thành → Long Hải (QL51 / TL44A)",
          km: "~40–50",
          oneWay: 35000,
          note: "Đoạn nối có thể một phần không thu phí"
        }
      ],
      legs: [
        {
          id: "leg-d1",
          label: "Ngày 1 · Đi SG → Palace / Dinh Cô",
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
