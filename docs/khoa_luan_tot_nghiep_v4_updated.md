**TRƯỜNG ĐẠI HỌC HỒNG ĐỨC**

**KHOA KỸ THUẬT, CÔNG NGHỆ VÀ TRUYỀN THÔNG**

**DOÃN TRỌNG HOÀNG**

**ỨNG DỤNG CÔNG NGHỆ BLOCKCHAIN XÂY DỰNG HỆ THỐNG LƯU TRỮ, XÁC THỰC VĂN
BẰNG CHỨNG CHỈ TẠI TRƯỜNG ĐẠI HỌC HỒNG ĐỨC**

**KHÓA LUẬN TỐT NGHIỆP ĐẠI HỌC HỆ CHÍNH QUY**

Ngành: Công nghệ thông tin

Thanh Hóa - 2026

**TRƯỜNG ĐẠI HỌC HỒNG ĐỨC**

**KHOA KỸ THUẬT, CÔNG NGHỆ VÀ TRUYỀN THÔNG**

**DOÃN TRỌNG HOÀNG**

**ỨNG DỤNG CÔNG NGHỆ BLOCKCHAIN XÂY DỰNG HỆ THỐNG LƯU TRỮ, XÁC THỰC VĂN
BẰNG CHỨNG CHỈ TẠI TRƯỜNG ĐẠI HỌC HỒNG ĐỨC**

**KHÓA LUẬN TỐT NGHIỆP ĐẠI HỌC HỆ CHÍNH QUY**

Ngành: Công nghệ thông tin

Giảng viên hướng dẫn: PGS.TS Trịnh Viết Cường

Thanh Hoá -- 2026

**LỜI CAM ĐOAN**

Tôi xin cam đoan khoá luận tốt nghiệp với đề tài \"Ứng dụng công nghệ
Blockchain xây dựng hệ thống lưu trữ, xác thực văn bằng chứng chỉ tại
Trường Đại học Hồng Đức\" là kết quả nghiên cứu do một mình tôi thực
hiện, dưới sự hướng dẫn trực tiếp của PGS.TS Trịnh Viết Cường. Toàn bộ
nội dung trong khóa luận được thực hiện dựa trên quá trình tìm hiểu,
phân tích, xây dựng và phát triển hệ thống, không sao chép từ bất kỳ
khoá luận, luận văn hay công trình nghiên cứu nào đã công bố trước đó.

Tôi xin chịu trách nhiệm hoàn toàn về lời cam đoan này.

*Thanh Hóa, ngày tháng năm 2026*

**Sinh viên thực hiện**

**Doãn Trọng Hoàng**

**LỜI CẢM ƠN**

Lời đầu tiên, tôi xin gửi lời cảm ơn sâu sắc tới các thầy cô giáo Trường
Đại học Hồng Đức, đặc biệt là các thầy cô giảng viên của Khoa Kỹ thuật,
Công nghệ và Truyền thông -- những người đã tận tâm giảng dạy, dẫn dắt
và truyền đạt cho chúng tôi những kiến thức quý báu trong suốt 4 năm học
vừa qua.

Tôi cũng xin gửi lời cảm ơn đến thầy Trịnh Viết Cường người đã định
hướng nghiên cứu, tận tình hướng dẫn tôi trong quá trình thực hiện khoá
luận này.

Bên cạnh đó, tôi xin cảm ơn tới gia đình, bạn bè, các anh chị đồng
nghiệp đã động viên, ủng hộ và tạo điều kiện tốt nhất để tôi có thể hoàn
thành khóa luận tốt nghiệp.

*Xin cảm ơn thầy cô, gia đình và bạn bè.*

**Sinh viên thực hiện**

**Doãn Trọng Hoàng**

**TÓM TẮT**

Thực tế hiện nay, khi sinh viên Trường Đại học Hồng Đức đi nộp hồ sơ xin
việc, nhiều nhà tuyển dụng muốn xác minh văn bằng/chứng chỉ là thật hay
giả. Tuy nhiên, việc xác thực hiện tại tại nhà trường vẫn còn tồn tại
hai vấn đề cốt lõi: (i) phần lớn nhà tuyển dụng phải thực hiện xác thực
qua công văn hành chính thủ công tốn nhiều thời gian; (ii) ngay cả hệ
thống tra cứu trực tuyến hiện có cũng chưa đảm bảo tính toàn vẹn dữ liệu
do phụ thuộc vào kiến trúc lưu trữ tập trung, dễ bị can thiệp hoặc tấn
công mạng.

Khóa luận \"Ứng dụng công nghệ Blockchain xây dựng hệ thống lưu trữ, xác
thực văn bằng chứng chỉ tại Trường Đại học Hồng Đức\" đề xuất và xây
dựng một hệ thống theo mô hình Hybrid On-chain/Off-chain: thông tin chi
tiết văn bằng và tệp đính kèm được lưu trong cơ sở dữ liệu PostgreSQL
(Off-chain) để tiện quản lý nghiệp vụ; đồng thời mã băm SHA-256 đại diện
cho toàn bộ nội dung văn bằng được ghi lên Hyperledger Fabric (On-chain)
nhằm tạo bằng chứng bất biến. Khi nhà tuyển dụng yêu cầu xác thực, hệ
thống tự động đối soát mã băm Off-chain với bản ghi On-chain theo nguyên
tắc check-on-demand và trả về kết luận hợp lệ/không hợp lệ gần như tức
thì, không cần thông qua bất kỳ trung gian nào.

**Từ khoá:** Blockchain, Hyperledger Fabric, văn bằng chứng chỉ, xác
thực, mã băm SHA-256, Hybrid On-chain/Off-chain, Trường Đại học Hồng
Đức.

**MỤC LỤC**

*\[Mục lục tự động --- cập nhật sau khi hoàn thiện toàn bộ khóa luận\]*

**DANH MỤC TỪ VIẾT TẮT**

*\[Bổ sung danh mục từ viết tắt\]*

**DANH MỤC BẢNG**

*\[Bổ sung danh mục bảng\]*

**DANH MỤC HÌNH**

*\[Bổ sung danh mục hình\]*

**MỞ ĐẦU**

**1. Lý do chọn đề tài**

Trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ trên phạm vi toàn cầu,
hệ thống giáo dục đại học đang đứng trước yêu cầu cấp thiết phải số hóa
và nâng cao độ tin cậy của các quy trình quản lý, trong đó có quy trình
quản lý và xác thực văn bằng chứng chỉ. Văn bằng tốt nghiệp không chỉ là
minh chứng cho quá trình học tập của người học mà còn là cơ sở pháp lý
quan trọng trong tuyển dụng lao động, hội nhập quốc tế và đánh giá chất
lượng đầu ra của cơ sở đào tạo.

Trên thế giới, tình trạng văn bằng giả, chứng chỉ không hợp lệ đang trở
thành vấn nạn toàn cầu, gây thiệt hại không chỉ cho các tổ chức tuyển
dụng mà còn làm xói mòn uy tín của hệ thống giáo dục. Tại Việt Nam, Bộ
Giáo dục và Đào tạo đã triển khai cổng tra cứu văn bằng chứng chỉ quốc
gia, tuy nhiên phần lớn các trường đại học vẫn chủ yếu dựa vào cơ sở dữ
liệu tập trung với khả năng kiểm chứng độc lập còn hạn chế.

Các hệ thống lưu trữ và xác thực văn bằng truyền thống, dù đã được số
hóa ở mức độ nhất định, vẫn tồn tại điểm yếu cơ bản về mặt kiến trúc:
toàn bộ dữ liệu tập trung vào một đầu mối quản lý duy nhất, khiến tính
toàn vẹn của dữ liệu phụ thuộc hoàn toàn vào sự trung thực và bảo mật
của hệ thống đó. Điều này tạo ra khoảng trống niềm tin đối với các bên
sử dụng kết quả xác thực, đặc biệt là nhà tuyển dụng và các tổ chức đối
tác.

Công nghệ Blockchain ra đời với những đặc tính nổi bật như tính bất biến
(immutability), phi tập trung (decentralization) và minh bạch
(transparency) đã mở ra hướng tiếp cận mới cho bài toán này. Thay vì phụ
thuộc vào một hệ thống lưu trữ trung tâm, Blockchain cho phép ghi nhận
thông tin theo cách không thể chỉnh sửa và có thể được kiểm chứng bởi
bất kỳ bên liên quan nào mà không cần qua trung gian. Nhiều trường đại
học và tổ chức giáo dục hàng đầu thế giới như MIT, Đại học Nicosia đã
tiên phong ứng dụng Blockchain vào việc cấp phát và xác thực văn bằng,
khẳng định tính khả thi và hiệu quả của hướng tiếp cận này.

Tuy nhiên, việc ứng dụng công nghệ Blockchain vào thực tiễn của một cơ
sở đào tạo cụ thể trong nước không thể áp dụng nguyên mẫu các giải pháp
quốc tế vốn được xây dựng cho môi trường vận hành, hạ tầng và quy trình
nghiệp vụ hoàn toàn khác biệt. Trường Đại học Hồng Đức, với đặc thù quy
trình quản lý, phân cấp tổ chức và hạ tầng kỹ thuật riêng, cần một giải
pháp được phân tích, thiết kế và kiểm thử phù hợp với điều kiện vận hành
thực tế của nhà trường.

Xuất phát từ những lý do đó, đề tài "Ứng dụng công nghệ Blockchain xây
dựng hệ thống lưu trữ, xác thực văn bằng chứng chỉ tại Trường Đại học
Hồng Đức" được lựa chọn nghiên cứu, nhằm xây dựng một giải pháp kỹ thuật
có tính khả thi và ứng dụng thực tiễn, góp phần nâng cao độ tin cậy và
tính minh bạch trong công tác quản lý văn bằng của nhà trường.

**2. Mục tiêu nghiên cứu**

Để giải quyết bài toán đặt ra, đề tài hướng đến các mục tiêu cụ thể sau:

> 1\. Tổng quan và phân tích công nghệ Blockchain, Hyperledger Fabric và
> các cơ chế ứng dụng trong lĩnh vực quản lý, xác thực văn bằng chứng
> chỉ.
>
> 2\. Phân tích, đánh giá thực trạng và hạn chế của hệ thống xác thực
> văn bằng hiện tại tại Trường Đại học Hồng Đức.
>
> 3\. Thiết kế và xây dựng hệ thống lưu trữ, xác thực văn bằng theo mô
> hình kết hợp trong chuỗi và ngoài chuỗi (Hybrid On-chain/Off-chain)
> ứng dụng công nghệ Hyperledger Fabric.
>
> 4\. Triển khai, kiểm thử hệ thống và đánh giá kết quả đạt được.

**3. Đối tượng và phạm vi nghiên cứu**

**Đối tượng nghiên cứu:** Công nghệ Blockchain (cụ thể là nền tảng
Hyperledger Fabric, Fabric CA, Fabric Gateway), thuật toán băm SHA-256,
mô hình Hybrid On-chain/Off-chain và quy trình nghiệp vụ quản lý vòng
đời hồ sơ văn bằng chứng chỉ.

**Phạm vi về chức năng:** Hệ thống tập trung vào bốn nhóm nghiệp vụ
chính: (i) nhập liệu và hoàn thiện hồ sơ văn bằng; (ii) duyệt hồ sơ theo
phân cấp quản lý; (iii) phát hành và thu hồi văn bằng trên Blockchain;
(iv) tra cứu và xác thực văn bằng công khai. Hệ thống không bao gồm các
nghiệp vụ quản lý đào tạo khác như quản lý điểm, học phí hay lịch học
của nhà trường.

**Phạm vi về không gian và thời gian:** Áp dụng tại Trường Đại học Hồng
Đức; thời gian nghiên cứu và triển khai từ năm 2025 đến năm 2026.

**4. Phương pháp nghiên cứu**

Để đạt được các mục tiêu đề ra, đề tài sử dụng kết hợp ba phương pháp
nghiên cứu chính:

> 1\. Phương pháp nghiên cứu tài liệu: Tổng hợp, phân tích các tài liệu
> khoa học, sách tham khảo, tài liệu kỹ thuật chính thức và các công
> trình nghiên cứu trong và ngoài nước về công nghệ Blockchain và ứng
> dụng trong lĩnh vực quản lý văn bằng, chứng chỉ. Phương pháp này cung
> cấp cơ sở lý thuyết vững chắc và giúp đánh giá tính kế thừa của các
> giải pháp đã có.
>
> 2\. Phương pháp phân tích và thiết kế hệ thống: Khảo sát, phân tích
> thực trạng hệ thống hiện tại; xác định yêu cầu chức năng và phi chức
> năng; thiết kế kiến trúc tổng thể, luồng dữ liệu và cơ sở dữ liệu theo
> chuẩn phân tích hướng đối tượng. Phương pháp này là nền tảng cho toàn
> bộ quá trình xây dựng hệ thống.
>
> 3\. Phương pháp thực nghiệm: Xây dựng và triển khai hệ thống trên môi
> trường thực tế; tiến hành kiểm thử theo các kịch bản nghiệp vụ đã
> thiết kế nhằm đánh giá tính đúng đắn, độ ổn định và hiệu năng của giải
> pháp.

**5. Cấu trúc khóa luận**

Ngoài phần Mở đầu, Kết luận và Tài liệu tham khảo, khóa luận được chia
thành 4 chương:

> Chương 1. Tổng quan --- trình bày thực trạng và hạn chế của hệ thống
> xác thực văn bằng hiện tại, các công trình nghiên cứu liên quan trong
> và ngoài nước, và định hướng tiếp cận của đề tài.
>
> Chương 2. Cơ sở lý thuyết --- giới thiệu các kiến thức nền tảng về
> công nghệ Blockchain, Hyperledger Fabric, hàm băm mật mã, mô hình
> Hybrid On-chain/Off-chain và các công nghệ hỗ trợ.
>
> Chương 3. Phân tích và thiết kế hệ thống --- trình bày kiến trúc tổng
> thể, biểu đồ phân cấp chức năng, biểu đồ luồng dữ liệu, đặc tả chi
> tiết các chức năng, thiết kế cơ sở dữ liệu và các đoạn mã cài đặt tiêu
> biểu.
>
> Chương 4. Triển khai và kiểm thử hệ thống --- mô tả môi trường triển
> khai, kết quả kiểm thử theo kịch bản và đánh giá tổng thể hệ thống.

**CHƯƠNG 1. TỔNG QUAN**

**1.1. Tổng quan về bài toán nghiên cứu**

> ***1.1.1. Thực trạng xác thực văn bằng chứng chỉ tại Trường Đại học
> Hồng Đức***

Hiện nay, Trường Đại học Hồng Đức đang triển khai đồng thời hai phương
thức xác thực văn bằng. Phương thức đầu tiên là tra cứu trực tuyến qua
cổng thông tin điện tử, cho phép người dùng tra cứu theo mã sinh viên,
họ tên, ngày sinh hoặc số hiệu văn bằng. Phương thức thứ hai là thông
qua công văn hành chính, nơi nhà tuyển dụng gửi công văn kèm bản sao văn
bằng về Phòng Quản lý đào tạo. Tại đây, cán bộ sẽ đối chiếu với sổ gốc
và ban hành văn bản xác nhận chính thức. Thực tế cho thấy phần lớn nhà
tuyển dụng vẫn phải sử dụng phương thức thứ hai, chủ yếu do chưa biết
đến hệ thống tra cứu trực tuyến, gây lãng phí thời gian và làm chậm trễ
quá trình tuyển dụng.

Ngay cả khi nhà tuyển dụng tiếp cận được cổng tra cứu trực tuyến chính
thức của nhà trường, hệ thống hiện tại vẫn tồn tại những hạn chế nghiêm
trọng về độ tin cậy xuất phát từ kiến trúc lưu trữ tập trung, cụ thể:

> **Nguy cơ can thiệp từ bên trong:** Toàn bộ dữ liệu văn bằng được lưu
> trữ trên máy chủ tập trung do nhà trường quản lý, đồng nghĩa với việc
> người có quyền quản trị hệ thống hoàn toàn có thể thêm, sửa hoặc xóa
> thông tin văn bằng mà không để lại dấu vết rõ ràng. Đây là lỗ hổng
> tiềm ẩn nghiêm trọng, tạo điều kiện cho hành vi làm giả văn bằng ngay
> từ bên trong hệ thống.
>
> **Nguy cơ bị tấn công mạng:** Hệ thống lưu trữ tập trung luôn là mục
> tiêu tiềm năng của các cuộc tấn công mạng. Một khi cơ sở dữ liệu bị
> xâm nhập, toàn bộ thông tin văn bằng có thể bị đánh cắp, chỉnh sửa
> hoặc phá hủy hàng loạt mà không có cơ chế khôi phục đáng tin cậy.
>
> **Thiếu cơ chế kiểm chứng độc lập:** Với kiến trúc tập trung, không có
> bất kỳ bên thứ ba nào có thể kiểm chứng dữ liệu văn bằng có bị thay
> đổi hay không, bởi toàn bộ lịch sử thao tác đều do một mình bên quản
> trị nắm giữ. Nhà tuyển dụng, dù tra cứu được kết quả, vẫn không có cơ
> sở khách quan để tin tưởng hoàn toàn vào tính xác thực của thông tin.

Như vậy, vấn đề không chỉ nằm ở việc quy trình xác thực còn thủ công và
chậm chạp, mà quan trọng hơn là ngay cả hệ thống tra cứu trực tuyến hiện
tại cũng chưa đảm bảo được tính toàn vẹn và minh bạch dữ liệu một cách
khách quan. Nhà tuyển dụng khi sử dụng hệ thống tra cứu hiện tại thực
chất đang đặt toàn bộ niềm tin vào sự trung thực của một hệ thống tập
trung duy nhất --- điều này về bản chất không khác gì tin tưởng vào một
bản photocopy chưa được công chứng độc lập.

> ***1.1.2. Đề xuất ứng dụng Blockchain để khắc phục hạn chế***

Từ ba hạn chế cốt lõi đã phân tích ở trên --- nguy cơ can thiệp nội bộ,
rủi ro tấn công mạng và thiếu cơ chế kiểm chứng độc lập --- có thể nhận
thấy rằng giải pháp cần thiết phải đáp ứng đồng thời ba yêu cầu: (i) dữ
liệu sau khi ghi không thể bị sửa đổi bởi bất kỳ ai; (ii) bất kỳ bên
liên quan nào cũng có thể tự kiểm chứng mà không cần thông qua trung
gian; (iii) hệ thống phải có khả năng chống lại tấn công đơn điểm. Công
nghệ Blockchain, với các tính chất bất biến (immutability), phi tập
trung (decentralization) và minh bạch (transparency), đáp ứng được cả ba
yêu cầu trên.

Cụ thể, khi thông tin văn bằng được ghi lên Blockchain dưới dạng mã băm
(hash), dữ liệu được lưu trữ vĩnh viễn và không thể bị chỉnh sửa hay xóa
bỏ bởi bất kỳ ai, kể cả người có quyền quản trị hệ thống. Bất kỳ thay
đổi nào đối với nội dung văn bằng --- dù chỉ là một ký tự --- đều tạo ra
mã băm hoàn toàn khác, lập tức bị hệ thống phát hiện. Nhờ đó, nguy cơ
làm giả hoặc can thiệp dữ liệu từ bên trong hệ thống được loại bỏ triệt
để.

Blockchain còn cho phép bất kỳ bên liên quan nào --- nhà tuyển dụng, cơ
quan nhà nước hay tổ chức đối tác --- tự mình kiểm chứng tính xác thực
của văn bằng mà không cần thông qua trung gian, xây dựng niềm tin khách
quan không phụ thuộc vào sự trung thực của bất kỳ một tổ chức nào. Bên
cạnh đó, với kiến trúc phi tập trung, dữ liệu không phụ thuộc vào một
máy chủ duy nhất, ngay cả khi một phần hệ thống gặp sự cố, dữ liệu văn
bằng vẫn được bảo toàn từ các nút còn lại.

Hệ thống đề xuất trong khóa luận hoạt động theo mô hình Hybrid
On-chain/Off-chain: thông tin chi tiết và tệp đính kèm vẫn được lưu
trong cơ sở dữ liệu truyền thống (Off-chain) để tiện quản lý nghiệp vụ,
trong khi mã băm đại diện cho toàn bộ nội dung được ghi lên Blockchain
(On-chain) để đảm bảo tính bất biến. Cách tiếp cận này vừa kế thừa ưu
điểm linh hoạt của hệ thống hiện có vừa bổ sung lớp bảo đảm tin cậy từ
Blockchain mà không đòi hỏi thay thế toàn bộ hạ tầng.

**1.2. Các công trình nghiên cứu liên quan**

> ***1.2.1. Nghiên cứu ngoài nước***

Ứng dụng Blockchain vào quản lý và xác thực văn bằng học thuật đã được
nghiên cứu và triển khai rộng rãi trên thế giới. Một số công trình tiêu
biểu có liên quan trực tiếp đến hướng tiếp cận của đề tài:

Sharples và Domingue (2016) là một trong những nhóm đầu tiên đề xuất ứng
dụng Blockchain vào lĩnh vực giáo dục trong công trình \"The Blockchain
and Kudos: A Distributed System for Educational Record, Reputation and
Reward\" (EC-TEL 2016). Nghiên cứu này giới thiệu mô hình lưu trữ hồ sơ
học tập trên Blockchain với dữ liệu được ký số, đảm bảo tính bất biến và
khả năng truy vết --- là nền tảng lý thuyết quan trọng cho hướng tiếp
cận của đề tài.

Turkanović và cộng sự (2018) đề xuất hệ thống EduCTX trong bài báo
\"EduCTX: A Blockchain-Based Higher Education Credit Platform\" đăng
trên IEEE Access. Hệ thống sử dụng Blockchain để quản lý tín chỉ và
thành tích học tập ở phạm vi đa trường, cho phép nhà tuyển dụng xác minh
thông tin một cách minh bạch và độc lập.

Hệ thống Blockcerts, phát triển bởi MIT Media Lab và Learning Machine
(2016), là chuẩn mở đầu tiên cho việc cấp phát và xác thực chứng chỉ học
thuật trên Blockchain Bitcoin. Đại học Nicosia (Síp) cũng là một trong
những trường tiên phong áp dụng Blockchain để cấp phát bằng tốt nghiệp
từ năm 2014. Những triển khai này khẳng định tính khả thi của nguyên lý
lưu mã băm văn bằng lên Blockchain.

Tuy nhiên, điểm chung của phần lớn các giải pháp quốc tế là được xây
dựng trên Blockchain công khai (Bitcoin, Ethereum) theo mô hình phi tập
trung hoàn toàn --- phù hợp với bài toán xác thực ở quy mô đa tổ chức,
không có trung tâm kiểm soát. Những đặc điểm thiết kế này mang lại hạn
chế khi áp dụng cho bài toán của một cơ sở đào tạo trong nước: không
kiểm soát được quyền phát hành, không quản lý được danh tính người dùng
nội bộ, có thể phát sinh chi phí giao dịch và tốc độ xử lý phụ thuộc vào
mạng công khai. Đây là lý do đề tài lựa chọn Hyperledger Fabric --- một
nền tảng Blockchain liên minh có kiến trúc và triết lý thiết kế khác
biệt --- thay vì áp dụng trực tiếp các giải pháp đã có.

> ***1.2.2. Nghiên cứu trong nước***

Tại Việt Nam, xu hướng ứng dụng Blockchain trong quản lý văn bằng, chứng
chỉ cũng đã được quan tâm và có một số nghiên cứu, triển khai bước đầu.
Một số đề tài tốt nghiệp tại các trường đại học kỹ thuật trong nước đã
khảo sát hướng ứng dụng Blockchain --- chủ yếu trên nền tảng Ethereum
--- vào việc số hóa và xác thực hồ sơ học thuật. Về mặt chính sách,
Quyết định số 749/QĐ-TTg năm 2020 của Chính phủ phê duyệt Chương trình
Chuyển đổi số quốc gia, trong đó xác định giáo dục là lĩnh vực ưu tiên
chuyển đổi số hàng đầu, tạo nền tảng thuận lợi cho các giải pháp như đề
tài đang nghiên cứu.

Điều quan trọng cần nhìn nhận là: dù xu hướng và hướng tiếp cận đã được
khẳng định ở cả trong và ngoài nước, mỗi cơ sở đào tạo lại có quy trình
nghiệp vụ, phân cấp quản lý, hạ tầng kỹ thuật và điều kiện vận hành
riêng biệt. Không có một giải pháp đóng gói sẵn nào --- dù là
Blockcerts, EduCTX hay bất kỳ hệ thống nào đã xây dựng ở nơi khác --- có
thể áp dụng trực tiếp cho Trường Đại học Hồng Đức mà không cần phân tích
lại toàn bộ quy trình nghiệp vụ thực tế, thiết kế lại kiến trúc cho phù
hợp và kiểm thử trong môi trường vận hành cụ thể của nhà trường.

**1.3. Nhận xét và định hướng nghiên cứu**

Qua tổng quan các công trình nghiên cứu trong và ngoài nước, có thể rút
ra một số nhận xét sau:

Thứ nhất, tính khả thi của việc ứng dụng Blockchain vào xác thực văn
bằng học thuật đã được chứng minh qua nhiều công trình nghiên cứu và
triển khai thực tế trên thế giới. Nguyên lý cốt lõi --- lưu mã băm đại
diện cho nội dung văn bằng lên Blockchain để đảm bảo tính bất biến ---
là một hướng tiếp cận có cơ sở vững chắc và đề tài kế thừa trực tiếp
nguyên lý này.

Thứ hai, việc một hướng tiếp cận đã được áp dụng ở nơi khác không có
nghĩa là có thể áp dụng ngay tại Trường Đại học Hồng Đức. Phần lớn các
giải pháp quốc tế được xây dựng trên Blockchain công khai theo mô hình
phi tập trung hoàn toàn, không phù hợp với yêu cầu kiểm soát quyền phát
hành và quản lý danh tính nội bộ của nhà trường. Điều này đặt ra nhu cầu
lựa chọn nền tảng kỹ thuật khác --- cụ thể là Hyperledger Fabric --- và
thiết kế lại kiến trúc cho phù hợp với đặc thù vận hành.

Thứ ba, đóng góp của đề tài mang tính ứng dụng (applied research): không
đặt mục tiêu đề xuất công nghệ hay thuật toán mới, mà tập trung vào việc
phân tích quy trình nghiệp vụ thực tế tại Trường Đại học Hồng Đức, lựa
chọn và điều chỉnh kiến trúc kỹ thuật phù hợp, xây dựng và kiểm thử hệ
thống trong môi trường cụ thể đó. Đây là công việc gắn liền với đặc thù
của một đơn vị cụ thể mà không công trình nào đã có thể thực hiện thay.

Từ các nhận xét trên, đề tài định hướng xây dựng hệ thống theo mô hình
Hybrid On-chain/Off-chain: sử dụng PostgreSQL để lưu trữ hồ sơ nghiệp vụ
và tệp đính kèm (Off-chain), đồng thời sử dụng Hyperledger Fabric để ghi
mã băm đại diện cho nội dung văn bằng (On-chain). Hướng tiếp cận này vừa
kế thừa nguyên lý đã được kiểm chứng từ các công trình quốc tế, vừa điều
chỉnh phù hợp với đặc thù vận hành thực tế của Trường Đại học Hồng Đức.

Chương 1 đã trình bày tổng quan về bài toán nghiên cứu, bao gồm thực
trạng và hạn chế của hệ thống hiện tại, đề xuất hướng ứng dụng
Blockchain để khắc phục, tổng quan các công trình liên quan và định
hướng tiếp cận của đề tài. Chương 2 sẽ trình bày các cơ sở lý thuyết nền
tảng làm căn cứ cho thiết kế và triển khai hệ thống.

**CHƯƠNG 2. CƠ SỞ LÝ THUYẾT**

**2.1. Tổng quan về công nghệ Blockchain**

> ***2.1.1. Định nghĩa Blockchain***

*\[Bổ sung nội dung\]*

> ***2.1.2. Kiến trúc và cơ chế hoạt động***

*\[Bổ sung nội dung\]*

> ***2.1.3. Phân loại Blockchain***

*\[Bổ sung nội dung\]*

> ***2.1.4. Hàm băm mật mã (Cryptographic Hash Function)***

*\[Bổ sung nội dung\]*

**2.2. Hyperledger Fabric**

> ***2.2.1. Giới thiệu Hyperledger Fabric***

*\[Bổ sung nội dung\]*

> ***2.2.2. Fabric CA và quản lý danh tính***

*\[Bổ sung nội dung\]*

> ***2.2.3. Fabric Gateway***

*\[Bổ sung nội dung\]*

**2.3. Chaincode (Smart Contract trên Fabric)**

*\[Bổ sung nội dung\]*

**2.4. Mô hình Hybrid On-chain/Off-chain**

*\[Bổ sung nội dung\]*

**2.5. Các công nghệ hỗ trợ**

> ***2.5.1. PostgreSQL***

*\[Bổ sung nội dung\]*

> ***2.5.2. Node.js và Express***

*\[Bổ sung nội dung\]*

> ***2.5.3. React và Vite***

React là thư viện mã nguồn mở do Meta phát triển, dùng để xây dựng giao
diện người dùng theo mô hình component. Mỗi thành phần giao diện được
đóng gói thành một component độc lập, có thể tái sử dụng và quản lý
trạng thái riêng, giúp phát triển và bảo trì ứng dụng web phức tạp một
cách hiệu quả.

Vite là công cụ xây dựng (build tool) thế hệ mới, cung cấp máy chủ phát
triển với tốc độ khởi động nhanh và hỗ trợ Hot Module Replacement (HMR),
giúp lập trình viên thấy ngay thay đổi trên trình duyệt khi chỉnh sửa
mã nguồn. Trong đề tài, Vite được sử dụng làm công cụ đóng gói cho ứng
dụng React.

> ***2.5.4. Ant Design***

Ant Design là thư viện giao diện người dùng (UI component library) phổ
biến dành cho React, cung cấp sẵn các thành phần giao diện như bảng dữ
liệu (Table), biểu mẫu (Form), nút bấm (Button), hộp thoại (Modal) và
nhiều thành phần khác với thiết kế chuyên nghiệp. Việc sử dụng Ant
Design giúp rút ngắn thời gian phát triển giao diện và đảm bảo tính
nhất quán về mặt trải nghiệm người dùng trong toàn bộ hệ thống.

**CHƯƠNG 3. PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG**

**3.1. Mô tả hệ thống**

Hệ thống được thiết kế như một nền tảng số hỗ trợ tra cứu và xác thực
văn bằng trực tuyến, hướng tới hai mục tiêu cốt lõi: (i) chuẩn hóa quy
trình nghiệp vụ xử lý hồ sơ văn bằng theo vai trò, và (ii) tăng cường
khả năng chống giả mạo, đảm bảo dữ liệu có thể kiểm chứng và truy vết.

> ***3.1.1. Kiến trúc tổng thể***

Về mặt kiến trúc phần mềm, hệ thống được tổ chức theo mô hình ba tầng:

> **Tầng giao diện (Frontend):** Ứng dụng web đơn trang (Single Page
> Application) xây dựng bằng React và Vite, sử dụng thư viện Ant Design
> cho giao diện người dùng. Frontend giao tiếp với tầng xử lý thông qua
> các API RESTful.
>
> **Tầng xử lý (Backend):** Máy chủ ứng dụng xây dựng bằng Node.js và
> Express, đảm nhận toàn bộ logic nghiệp vụ: xác thực người dùng, quản
> lý vòng đời hồ sơ, tính toán recordHash và tương tác với Hyperledger
> Fabric thông qua Fabric Gateway (gRPC + TLS).
>
> **Tầng dữ liệu:** Bao gồm hai thành phần song song --- cơ sở dữ liệu
> PostgreSQL (Off-chain) lưu trữ hồ sơ nghiệp vụ và tệp đính kèm, và
> Hyperledger Fabric (On-chain) lưu bản ghi mã băm bất biến.

Để giải quyết đồng thời yêu cầu lưu trữ hồ sơ chi tiết (bao gồm tệp đính
kèm dung lượng lớn) và yêu cầu tạo bằng chứng bất biến cho xác thực, đề
tài lựa chọn mô hình Hybrid On-chain/Off-chain. Theo đó, phần Off-chain
sử dụng PostgreSQL để lưu hồ sơ nghiệp vụ và tệp đính kèm; phần On-chain
triển khai trên Hyperledger Fabric để lưu bản ghi tối giản gồm serialNo
và recordHash.

recordHash được hiểu là mã băm đại diện cho toàn bộ nội dung văn bằng.
Hệ thống chuẩn hóa dữ liệu theo một chuỗi văn bản chuẩn hóa (canonical
text) với thứ tự trường cố định, đồng thời đưa giá trị băm SHA-256 của
các tệp đính kèm vào chuỗi chuẩn hóa trước khi băm tổng hợp. Nhờ đó, chỉ
cần thay đổi một ký tự trong bất kỳ trường nào cũng tạo ra recordHash
hoàn toàn khác, lập tức bị hệ thống phát hiện.

Về nghiệp vụ, hồ sơ văn bằng được quản lý theo vòng đời trạng thái gồm
PENDING, APPROVED, REJECTED, ISSUED và REVOKED. Hệ thống quy định rõ vai
trò tác nhân: STAFF nhập liệu và hoàn thiện hồ sơ; MANAGER duyệt hoặc từ
chối hồ sơ; ISSUER phát hành/thu hồi trên Fabric và có thể từ chối phát
hành trong trường hợp cần thiết.

Đối với tra cứu/xác thực công khai, hệ thống áp dụng nguyên tắc \"xác
thực theo yêu cầu\" (check-on-demand): hệ thống chỉ thực hiện đối soát
recordHash giữa Off-chain và On-chain tại thời điểm PUBLIC yêu cầu. Cách
tiếp cận này cân bằng giữa độ tin cậy của kết luận xác thực và hiệu năng
vận hành.

**3.2. Phân tích thiết kế hệ thống**

> ***3.2.1. Biểu đồ phân cấp chức năng***

Nhằm làm rõ phạm vi và cách tổ chức chức năng, hệ thống được phân rã
theo nhóm nghiệp vụ và theo vai trò tác nhân. Biểu đồ phân cấp chức năng
giúp thể hiện rõ các khối chức năng chính và quan hệ phụ thuộc giữa
chúng, làm cơ sở cho thiết kế luồng dữ liệu và đặc tả Use-case.

> flowchart TD
>
> A\[Hệ thống tra cứu & xác thực văn bằng\]
>
> A \--\> B\[Quản trị hệ thống (ADMIN)\]
>
> A \--\> C\[Quản lý hồ sơ văn bằng (STAFF)\]
>
> A \--\> D\[Duyệt hồ sơ (MANAGER)\]
>
> A \--\> E\[Phát hành/Thu hồi (ISSUER) --- On-chain\]
>
> A \--\> F\[Tra cứu/Xác thực công khai (PUBLIC)\]
>
> B \--\> B1\[Đăng nhập / Đổi mật khẩu\]
>
> B \--\> B2\[Quản lý người dùng\]
>
> C \--\> C1\[Tạo hồ sơ + tải 03 tệp\]
>
> C \--\> C2\[Cập nhật hồ sơ (PENDING/REJECTED)\]
>
> C \--\> C3\[Gửi lại hồ sơ (REJECTED→PENDING)\]
>
> D \--\> D1\[Duyệt (PENDING→APPROVED)\]
>
> D \--\> D2\[Từ chối (PENDING→REJECTED)\]
>
> D \--\> D3\[Ghi nhật ký duyệt/từ chối\]
>
> E \--\> E1\[Tạo ví phát hành (wallet.json)\]
>
> E \--\> E2\[Phát hành (IssueDiploma; APPROVED→ISSUED)\]
>
> E \--\> E3\[Thu hồi (RevokeDiploma; ISSUED→REVOKED)\]
>
> E \--\> E4\[Từ chối phát hành (APPROVED→REJECTED)\]
>
> F \--\> F1\[Tìm kiếm văn bằng công khai\]
>
> F \--\> F2\[Xác thực theo yêu cầu (check-on-demand)\]
>
> F \--\> F3\[Tải tệp công khai\]

***Hình 3.1: Biểu đồ phân cấp chức năng***

> ***3.2.2. Biểu đồ luồng dữ liệu***
>
> **3.2.2.1. DFD mức ngữ cảnh**

DFD mức ngữ cảnh mô tả hệ thống như một tiến trình tổng thể tương tác
với các tác nhân bên ngoài. Trong kiến trúc Hybrid, hệ thống đồng thời
truy cập hai kho dữ liệu: PostgreSQL (Off-chain) và Hyperledger Fabric
(On-chain). Việc thể hiện rõ hai kho dữ liệu ở mức ngữ cảnh giúp làm nổi
bật điểm khác biệt cốt lõi so với kiến trúc truyền thống.

> flowchart LR
>
> STAFF\[Nhân viên nhập liệu (STAFF)\]
>
> MANAGER\[Người duyệt (MANAGER)\]
>
> ISSUER\[Người phát hành (ISSUER)\]
>
> PUBLIC\[Người tra cứu (PUBLIC)\]
>
> ADMIN\[Quản trị hệ thống (ADMIN)\]
>
> SYS((Hệ thống tra cứu & xác thực văn bằng))
>
> DB\[(CSDL PostgreSQL --- Off-chain)\]
>
> BC\[(Blockchain Fabric --- On-chain)\]
>
> STAFF \-- \"Hồ sơ + 03 tệp đính kèm\" \--\> SYS
>
> MANAGER \-- \"Duyệt/Từ chối\" \--\> SYS
>
> ISSUER \-- \"Phát hành/Thu hồi + wallet.json\" \--\> SYS
>
> PUBLIC \-- \"Tra cứu/Xác thực\" \--\> SYS
>
> ADMIN \-- \"Quản lý người dùng\" \--\> SYS
>
> SYS \<\--\> DB
>
> SYS \<\--\> BC

***Hình 3.2: Biểu đồ luồng dữ liệu mức ngữ cảnh***

> **3.2.2.2. DFD mức đỉnh**

DFD mức đỉnh phân rã tiến trình tổng thể thành các tiến trình con chính
tương ứng với các mảng chức năng: quản trị người dùng, quản lý hồ sơ,
duyệt hồ sơ, phát hành/thu hồi/từ chối phát hành và tra cứu/xác thực
công khai. Sơ đồ thể hiện rõ các bảng dữ liệu Off-chain được truy cập và
điểm giao tiếp On-chain.

> flowchart LR
>
> STAFF\[STAFF\] MANAGER\[MANAGER\]
>
> ISSUER\[ISSUER\] PUBLIC\[PUBLIC\] ADMIN\[ADMIN\]
>
> P1((1. Quản lý người dùng))
>
> P2((2. Quản lý hồ sơ văn bằng))
>
> P3((3. Duyệt hồ sơ))
>
> P4((4. Phát hành/Thu hồi/Từ chối phát hành))
>
> P5((5. Tra cứu/Xác thực))
>
> D1\[(D1: users)\] D2\[(D2: diplomas)\]
>
> D3\[(D3: diploma\_files)\] D4\[(D4: approval\_logs)\] D5\[(D5:
> chain\_logs)\]
>
> BC\[(Fabric world state)\]
>
> ADMIN \--\> P1 \--\> D1
>
> STAFF \--\> P2 \--\> D2 & D3
>
> MANAGER \--\> P3 \--\> D2 & D4
>
> ISSUER \--\> P4 \--\> D2 & D5 & BC
>
> PUBLIC \--\> P5 \--\> D2 & D3 & BC

***Hình 3.3: Biểu đồ luồng dữ liệu mức đỉnh***

**3.3. Đặc tả chi tiết các chức năng trong hệ thống**

> ***3.3.1. Danh sách các chức năng***

Để đảm bảo thống nhất trong phân tích và triển khai, các chức năng của
hệ thống được mã hóa theo dạng UCxx. Danh sách dưới đây tổng hợp tên
chức năng, tác nhân thực hiện và mô tả ngắn gọn, làm cơ sở cho đặc tả
Use-case chi tiết.

  ----------- -------------------------------- ---------------------------- -----------------------------------------------------------------------------------------------------
  **Mã CN**   **Tên chức năng**                **Tác nhân**                 **Mô tả**
  UC01        Đăng nhập                        ADMIN/STAFF/MANAGER/ISSUER   Xác thực người dùng nội bộ bằng tài khoản và tạo phiên làm việc.
  UC02        Quản lý người dùng               ADMIN                        Thêm mới và xem danh sách tài khoản người dùng theo vai trò.
  UC03        Tạo hồ sơ văn bằng               STAFF                        Nhập dữ liệu văn bằng và tải lên 03 tệp đính kèm; lưu hồ sơ ở trạng thái PENDING.
  UC04        Cập nhật hồ sơ văn bằng          STAFF                        Chỉnh sửa thông tin và/hoặc tệp khi trạng thái PENDING/REJECTED.
  UC05        Duyệt hồ sơ                      MANAGER                      Duyệt hồ sơ hợp lệ, chuyển trạng thái sang APPROVED và ghi nhật ký duyệt.
  UC06        Từ chối hồ sơ                    MANAGER                      Từ chối hồ sơ, ghi lý do và chuyển trạng thái sang REJECTED.
  UC07        Tạo ví phát hành (wallet.json)   ISSUER                       Tạo danh tính phát hành bằng Fabric CA và trả về tệp wallet.json.
  UC08        Phát hành văn bằng               ISSUER                       Tính recordHash, ghi bản ghi lên Fabric (IssueDiploma) và cập nhật trạng thái ISSUED.
  UC09        Thu hồi văn bằng                 ISSUER                       Thu hồi văn bằng trên Fabric (RevokeDiploma) và cập nhật trạng thái REVOKED.
  UC10        Tra cứu văn bằng                 PUBLIC                       Tra cứu công khai theo số hiệu/mã SV/tên SV (chỉ ISSUED/REVOKED).
  UC11        Xác thực văn bằng                PUBLIC                       Đối chiếu recordHash Off-chain/On-chain theo nguyên tắc check-on-demand.
  UC12        Tải tệp công khai                PUBLIC                       Tải/hiển thị tệp đính kèm của văn bằng đã công khai (ISSUED/REVOKED).
  UC13        Xem nhật ký duyệt                STAFF/MANAGER/ISSUER         Xem lịch sử duyệt/từ chối của hồ sơ (append-only).
  UC14        Xem nhật ký blockchain           STAFF/MANAGER/ISSUER         Xem lịch sử giao dịch phát hành/thu hồi (append-only).
  UC15        Đổi mật khẩu                     ADMIN/STAFF/MANAGER/ISSUER   Đổi mật khẩu sau khi đăng nhập; hệ thống kiểm tra mật khẩu cũ và cập nhật mật khẩu mới.
  UC16        Gửi lại hồ sơ                    STAFF                        Gửi lại hồ sơ đã bị từ chối (REJECTED) để đưa vào vòng xét duyệt lại; trạng thái chuyển về PENDING.
  UC17        Từ chối phát hành văn bằng       ISSUER                       Từ chối phát hành đối với hồ sơ ở trạng thái APPROVED; chuyển trạng thái sang REJECTED.
  UC18        Xem dữ liệu on-chain nội bộ      STAFF/MANAGER/ISSUER         Đọc bản ghi văn bằng trực tiếp từ Fabric theo serialNo để đối chiếu nội bộ (ReadDiploma).
  ----------- -------------------------------- ---------------------------- -----------------------------------------------------------------------------------------------------

***Bảng 3.1: Danh sách các chức năng của hệ thống***

> ***3.3.2. Đặc tả chức năng \"Duyệt hồ sơ\"***

Chức năng duyệt hồ sơ là bước kiểm soát dữ liệu trước khi chuyển sang
giai đoạn phát hành. Việc ghi nhận nhật ký duyệt giúp tăng khả năng truy
vết.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC05                             |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Duyệt hồ sơ                      |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | MANAGER                          |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép tác nhân duyệt hồ sơ    |
|                                  | văn bằng ở trạng thái PENDING.   |
|                                  | Hồ sơ sau khi duyệt chuyển sang  |
|                                  | APPROVED, đồng thời hệ thống ghi |
|                                  | nhận nhật ký duyệt để phục vụ    |
|                                  | truy vết.                        |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Tác nhân chọn hồ sơ và nhấn nút  |
|                                  | \"Duyệt\".                       |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Tác nhân đăng nhập hợp lệ dưới   |
|                                  | vai trò MANAGER; hồ sơ tồn tại   |
|                                  | và đang ở trạng thái PENDING.    |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Hồ sơ chuyển sang APPROVED;      |
|                                  | trường approved\_by/approved\_at |
|                                  | được gán; tạo bản ghi            |
|                                  | approval\_logs(action=APPROVE).  |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Tác nhân mở danh sách hồ sơ  |
|                                  | PENDING.                         |
|                                  |                                  |
|                                  | 2\) Chọn hồ sơ cần duyệt.        |
|                                  |                                  |
|                                  | 3\) Hệ thống khóa bản ghi và     |
|                                  | kiểm tra trạng thái.             |
|                                  |                                  |
|                                  | 4\) Cập nhật trạng thái          |
|                                  | APPROVED, gán người duyệt và     |
|                                  | thời gian.                       |
|                                  |                                  |
|                                  | 5\) Ghi nhật ký duyệt vào        |
|                                  | approval\_logs.                  |
|                                  |                                  |
|                                  | 6\) Trả kết quả duyệt thành      |
|                                  | công.                            |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Hồ sơ không ở trạng thái     |
|                                  | PENDING: hệ thống từ chối thao   |
|                                  | tác và thông báo lý do.          |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Hồ sơ không tồn tại.         |
|                                  |                                  |
|                                  | E2) Lỗi CSDL khi cập nhật hoặc   |
|                                  | ghi log.                         |
+----------------------------------+----------------------------------+

***Bảng 3.2: Đặc tả chức năng \"Duyệt hồ sơ\"***

> ***3.3.3. Đặc tả chức năng \"Phát hành văn bằng\"***

Phát hành là thao tác then chốt gắn dữ liệu Off-chain với bằng chứng bất
biến trên Blockchain thông qua recordHash. Kết quả phát hành được đồng
bộ Off-chain và ghi nhật ký chain\_logs.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC08                             |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Phát hành văn bằng               |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | ISSUER                           |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép tác nhân phát hành văn  |
|                                  | bằng đã được duyệt (APPROVED).   |
|                                  | Hệ thống tính recordHash từ dữ   |
|                                  | liệu và tệp Off-chain, sau đó    |
|                                  | ghi bản ghi lên Fabric bằng giao |
|                                  | dịch IssueDiploma. Kết quả phát  |
|                                  | hành được đồng bộ về CSDL và     |
|                                  | nhật ký chain\_logs.             |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Tác nhân chọn hồ sơ APPROVED,    |
|                                  | tải lên wallet.json và nhấn      |
|                                  | \"Phát hành\".                   |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Tác nhân đăng nhập vai trò       |
|                                  | ISSUER; hồ sơ ở trạng thái       |
|                                  | APPROVED; 03 tệp đính kèm tồn    |
|                                  | tại; wallet.json hợp lệ (mspId,  |
|                                  | certificate, privateKey).        |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Hồ sơ chuyển sang ISSUED;        |
|                                  | issued\_by/issued\_at được gán;  |
|                                  | chain\_logs(action=ISSUE) được   |
|                                  | ghi; On-chain có bản ghi mới     |
|                                  | theo khóa serialNo.              |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Nhận wallet.json và kiểm tra |
|                                  | định dạng.                       |
|                                  |                                  |
|                                  | 2\) Khóa hồ sơ và kiểm tra trạng |
|                                  | thái APPROVED.                   |
|                                  |                                  |
|                                  | 3\) Tính recordHash              |
|                                  | (computeRecordHashByDiplomaId).  |
|                                  |                                  |
|                                  | 4\) Tạo diplomaData gồm dữ liệu  |
|                                  | cốt lõi kèm recordHash và        |
|                                  | issuedAt.                        |
|                                  |                                  |
|                                  | 5\) Gọi Fabric Gateway           |
|                                  | sub                              |
|                                  | mitTransaction(\"IssueDiploma\", |
|                                  | serialNo,                        |
|                                  | JSON.stringify(diplomaData)).    |
|                                  |                                  |
|                                  | 6\) Cập nhật CSDL:               |
|                                  | status=ISSUED, issued\_by,       |
|                                  | issued\_at.                      |
|                                  |                                  |
|                                  | 7\) Ghi chain\_logs với tx\_id   |
|                                  | và record\_hash.                 |
|                                  |                                  |
|                                  | 8\) Trả kết quả phát hành thành  |
|                                  | công.                            |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Thiếu dữ liệu bắt buộc: hệ   |
|                                  | thống dừng và yêu cầu bổ sung.   |
|                                  |                                  |
|                                  | A2) serialNo đã tồn tại          |
|                                  | on-chain: chaincode trả          |
|                                  | ALREADY\_EXISTS.                 |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Lỗi kết nối Fabric/CA hoặc   |
|                                  | lỗi ký giao dịch.                |
|                                  |                                  |
|                                  | E2) Giao dịch blockchain thất    |
|                                  | bại.                             |
|                                  |                                  |
|                                  | E3) Lỗi CSDL khi cập nhật trạng  |
|                                  | thái hoặc ghi log.               |
+----------------------------------+----------------------------------+

***Bảng 3.3: Đặc tả chức năng \"Phát hành văn bằng\"***

> ***3.3.4. Đặc tả chức năng \"Thu hồi văn bằng\"***

Thu hồi được sử dụng khi văn bằng đã phát hành nhưng cần vô hiệu hóa do
yêu cầu nghiệp vụ. Trạng thái REVOKED được cập nhật đồng nhất Off-chain
và On-chain.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC09                             |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Thu hồi văn bằng                 |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | ISSUER                           |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép tác nhân thu hồi văn    |
|                                  | bằng đã phát hành (ISSUED). Hệ   |
|                                  | thống gọi giao dịch              |
|                                  | RevokeDiploma trên Fabric và cập |
|                                  | nhật trạng thái Off-chain sang   |
|                                  | REVOKED, đồng thời lưu nhật ký   |
|                                  | chain\_logs.                     |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Tác nhân chọn hồ sơ ISSUED, tải  |
|                                  | lên wallet.json và nhấn \"Thu    |
|                                  | hồi\".                           |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Tác nhân đăng nhập vai trò       |
|                                  | ISSUER; hồ sơ ở trạng thái       |
|                                  | ISSUED; wallet.json hợp lệ.      |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Hồ sơ chuyển sang REVOKED;       |
|                                  | revoked\_by/revoked\_at được     |
|                                  | gán; chain\_logs(action=REVOKE)  |
|                                  | được ghi; On-chain cập nhật      |
|                                  | trạng thái REVOKED.              |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Nhận wallet.json và kiểm tra |
|                                  | định dạng.                       |
|                                  |                                  |
|                                  | 2\) Khóa hồ sơ và kiểm tra trạng |
|                                  | thái ISSUED.                     |
|                                  |                                  |
|                                  | 3\) Gọi Fabric Gateway           |
|                                  | subm                             |
|                                  | itTransaction(\"RevokeDiploma\", |
|                                  | serialNo, revokedAtISO).         |
|                                  |                                  |
|                                  | 4\) Cập nhật CSDL:               |
|                                  | status=REVOKED, revoked\_by,     |
|                                  | revoked\_at.                     |
|                                  |                                  |
|                                  | 5\) Ghi chain\_logs với tx\_id   |
|                                  | và record\_hash.                 |
|                                  |                                  |
|                                  | 6\) Trả kết quả thu hồi thành    |
|                                  | công.                            |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Hồ sơ không ở trạng thái     |
|                                  | ISSUED: hệ thống từ chối thao    |
|                                  | tác.                             |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Không tìm thấy văn bằng trên |
|                                  | blockchain (NOT\_FOUND).         |
|                                  |                                  |
|                                  | E2) Lỗi giao dịch                |
|                                  | blockchain/CSDL.                 |
+----------------------------------+----------------------------------+

***Bảng 3.4: Đặc tả chức năng \"Thu hồi văn bằng\"***

> ***3.3.5. Đặc tả chức năng \"Xác thực văn bằng theo yêu cầu
> (check-on-demand)\"***

Xác thực công khai được triển khai theo nguyên tắc đối soát tại thời
điểm yêu cầu. Kết luận xác thực dựa trên so khớp recordHash Off-chain
với bản ghi đọc từ Fabric.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC11                             |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Xác thực văn bằng                |
|                                  | (check-on-demand)                |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | PUBLIC                           |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép tra cứu và đưa ra kết   |
|                                  | luận xác thực dựa trên đối chiếu |
|                                  | recordHash giữa Off-chain và     |
|                                  | On-chain. Hệ thống chỉ thực hiện |
|                                  | đối soát khi có yêu cầu nhằm cân |
|                                  | bằng hiệu năng.                  |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Người dùng nhập số hiệu văn bằng |
|                                  | và yêu cầu \"Xác thực\".         |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Văn bằng tồn tại Off-chain và đã |
|                                  | công khai (ISSUED hoặc REVOKED). |
|                                  | Hệ thống kết nối Fabric để đọc   |
|                                  | bản ghi.                         |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Không thay đổi dữ liệu; hệ thống |
|                                  | trả về computedRecordHash, bản   |
|                                  | ghi on-chain và cờ match.        |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Nhận serialNo.               |
|                                  |                                  |
|                                  | 2\) Tra cứu Off-chain để đảm bảo |
|                                  | trạng thái ISSUED/REVOKED.       |
|                                  |                                  |
|                                  | 3\) Tính recordHash Off-chain.   |
|                                  |                                  |
|                                  | 4\) Đọc bản ghi On-chain theo    |
|                                  | serialNo.                        |
|                                  |                                  |
|                                  | 5\) So sánh computedRecordHash   |
|                                  | với onchain.recordHash.          |
|                                  |                                  |
|                                  | 6\) Trả kết quả match=true nếu   |
|                                  | trùng khớp; ngược lại            |
|                                  | match=false.                     |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Không đọc được On-chain: trả |
|                                  | onchain.exists=false.            |
|                                  |                                  |
|                                  | A2) Thiếu tệp Off-chain:         |
|                                  | computedRecordHash=null và thông |
|                                  | báo dữ liệu chưa đủ.             |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Không tìm thấy văn bằng hoặc |
|                                  | văn bằng chưa được công khai.    |
|                                  |                                  |
|                                  | E2) Lỗi kết nối CSDL hoặc        |
|                                  | blockchain.                      |
+----------------------------------+----------------------------------+

***Bảng 3.5: Đặc tả chức năng \"Xác thực văn bằng (check-on-demand)\"***

> ***3.3.6. Đặc tả chức năng \"Cập nhật/Gửi lại hồ sơ văn bằng\"***

STAFF được phép cập nhật hoặc gửi lại hồ sơ trong các trạng thái phù
hợp. Cơ chế này giảm thao tác tạo mới, đồng thời đảm bảo hồ sơ quay lại
PENDING để xét duyệt lại.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC04/UC16                        |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Cập nhật/Gửi lại hồ sơ văn bằng  |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | STAFF                            |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép nhân viên cập nhật      |
|                                  | thông tin và/hoặc tệp đính kèm   |
|                                  | của hồ sơ khi hồ sơ đang ở trạng |
|                                  | thái PENDING hoặc REJECTED. Sau  |
|                                  | khi cập nhật, hồ sơ được đưa về  |
|                                  | trạng thái PENDING để xét duyệt  |
|                                  | lại.                             |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Tác nhân chọn hồ sơ và nhấn      |
|                                  | \"Sửa hồ sơ\" (cập nhật) hoặc    |
|                                  | \"Gửi lại duyệt\" (resubmit).    |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Tác nhân đăng nhập hợp lệ dưới   |
|                                  | vai trò STAFF; hồ sơ tồn tại;    |
|                                  | trạng thái hồ sơ thuộc PENDING   |
|                                  | hoặc REJECTED.                   |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Hồ sơ chuyển (hoặc giữ) về       |
|                                  | PENDING; cập nhật updated\_at.   |
|                                  | Nếu thao tác gửi lại, hệ thống   |
|                                  | xóa                              |
|                                  | rejected\_rea                    |
|                                  | son/rejected\_role/rejected\_at. |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Tác nhân mở chi tiết hồ sơ   |
|                                  | và chọn thao tác cập nhật hoặc   |
|                                  | gửi lại.                         |
|                                  |                                  |
|                                  | 2\) Hệ thống khóa bản ghi và     |
|                                  | kiểm tra trạng thái hợp lệ.      |
|                                  |                                  |
|                                  | 3\) Với cập nhật: kiểm tra các   |
|                                  | trường bắt buộc.                 |
|                                  |                                  |
|                                  | 4\) Hệ thống cập nhật thông tin, |
|                                  | đặt status=PENDING, lưu          |
|                                  | updated\_at.                     |
|                                  |                                  |
|                                  | 5\) Nếu có tệp mới, hệ thống     |
|                                  | thực hiện upsert tệp theo kind.  |
|                                  |                                  |
|                                  | 6\) Với gửi lại: đặt             |
|                                  | status=PENDING và xóa thông tin  |
|                                  | từ chối trước đó.                |
|                                  |                                  |
|                                  | 7\) Trả kết quả cập nhật/gửi lại |
|                                  | thành công.                      |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Hồ sơ không ở trạng thái cho |
|                                  | phép: hệ thống từ chối thao tác. |
|                                  |                                  |
|                                  | A2) Thiếu trường bắt buộc: hệ    |
|                                  | thống yêu cầu bổ sung.           |
|                                  |                                  |
|                                  | A3) Tệp đính kèm không hợp lệ:   |
|                                  | hệ thống từ chối tải lên.        |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Hồ sơ không tồn tại.         |
|                                  |                                  |
|                                  | E2) Lỗi CSDL khi cập nhật hoặc   |
|                                  | ghi tệp.                         |
+----------------------------------+----------------------------------+

***Bảng 3.6: Đặc tả chức năng \"Cập nhật/Gửi lại hồ sơ văn bằng\"***

> ***3.3.7. Đặc tả chức năng \"Từ chối phát hành văn bằng\"***

Chức năng từ chối phát hành cho phép ISSUER dừng quy trình phát hành khi
phát hiện vấn đề, đồng thời lưu lý do và ghi nhật ký approval\_logs để
phục vụ kiểm tra.

+----------------------------------+----------------------------------+
| **Mã chức năng**                 | UC17                             |
+----------------------------------+----------------------------------+
| **Tên chức năng**                | Từ chối phát hành văn bằng       |
+----------------------------------+----------------------------------+
| **Tác nhân**                     | ISSUER                           |
+----------------------------------+----------------------------------+
| **Mô tả**                        | Cho phép tác nhân ISSUER từ chối |
|                                  | phát hành đối với hồ sơ đã được  |
|                                  | duyệt (APPROVED) khi phát hiện   |
|                                  | sai lệch hoặc chưa đủ điều kiện  |
|                                  | phát hành.                       |
+----------------------------------+----------------------------------+
| **Sự kiện kích hoạt**            | Tác nhân chọn hồ sơ APPROVED và  |
|                                  | nhấn \"Từ chối phát hành\", nhập |
|                                  | lý do (tùy chọn).                |
+----------------------------------+----------------------------------+
| **Điều kiện tiên quyết**         | Tác nhân đăng nhập hợp lệ dưới   |
|                                  | vai trò ISSUER; hồ sơ tồn tại và |
|                                  | đang ở trạng thái APPROVED.      |
+----------------------------------+----------------------------------+
| **Trạng thái sau khi thực hiện** | Hồ sơ chuyển sang REJECTED; gán  |
|                                  | rejected\_reason,                |
|                                  | rejected\_role=\"ISSUER\",       |
|                                  | rejected\_at; tạo bản ghi        |
|                                  | approval\_logs(action=REJECT).   |
+----------------------------------+----------------------------------+
| **Luồng xử lý chính**            | 1\) Tác nhân chọn hồ sơ APPROVED |
|                                  | và nhập lý do từ chối.           |
|                                  |                                  |
|                                  | 2\) Hệ thống khóa bản ghi và     |
|                                  | kiểm tra trạng thái APPROVED.    |
|                                  |                                  |
|                                  | 3\) Cập nhật hồ sơ:              |
|                                  | status=REJECTED,                 |
|                                  | rejected\_reason,                |
|                                  | rejected\_role=\"ISSUER\",       |
|                                  | rejected\_at.                    |
|                                  |                                  |
|                                  | 4\) Ghi approval\_logs với       |
|                                  | action=REJECT.                   |
|                                  |                                  |
|                                  | 5\) Trả kết quả từ chối phát     |
|                                  | hành thành công.                 |
+----------------------------------+----------------------------------+
| **Các luồng xử lý thay thế**     | A1) Hồ sơ không ở trạng thái     |
|                                  | APPROVED: hệ thống từ chối thao  |
|                                  | tác.                             |
+----------------------------------+----------------------------------+
| **Ngoại lệ**                     | E1) Hồ sơ không tồn tại.         |
|                                  |                                  |
|                                  | E2) Lỗi CSDL khi cập nhật trạng  |
|                                  | thái hoặc ghi log.               |
+----------------------------------+----------------------------------+

***Bảng 3.7: Đặc tả chức năng \"Từ chối phát hành văn bằng\"***

**3.4. Phân tích thiết kế cơ sở dữ liệu**

> ***3.4.1. Mô hình thực thể liên kết***

Phần Off-chain (PostgreSQL) lưu trữ các thực thể nghiệp vụ cốt lõi:
users, diplomas, diploma\_files, approval\_logs và chain\_logs. Trong
đó, diplomas là bảng trung tâm; các bảng còn lại đóng vai trò lưu tệp
đính kèm và nhật ký xử lý. Phần On-chain (Hyperledger Fabric) lưu bản
ghi tối giản theo khóa serialNo.

Các mối quan hệ giữa các thực thể Off-chain được tổng hợp trong Bảng
3.8. Việc mô tả rõ quan hệ 1-n giúp định hướng thiết kế khóa ngoại và
truy vấn dữ liệu trong quá trình triển khai.

  ---------------- ------------------ ---------------- -----------------------------
  **Thực thể 1**   **Kiểu quan hệ**   **Thực thể 2**   **Ghi chú**
  users            tạo                diplomas         1-n (created\_by)
  users            duyệt              diplomas         1-n (approved\_by)
  users            phát hành          diplomas         1-n (issued\_by)
  users            thu hồi            diplomas         1-n (revoked\_by)
  diplomas         có                 diploma\_files   1-n (mỗi văn bằng có 3 tệp)
  diplomas         ghi                approval\_logs   1-n
  diplomas         ghi                chain\_logs      1-n
  ---------------- ------------------ ---------------- -----------------------------

***Bảng 3.8: Các mối quan hệ giữa các thực thể***

Mô hình thực thể liên kết (ERD) được mô tả như sau:

> erDiagram
>
> users \|\|\--o{ diplomas : creates
>
> users \|\|\--o{ diplomas : approves
>
> users \|\|\--o{ diplomas : issues
>
> users \|\|\--o{ diplomas : revokes
>
> diplomas \|\|\--o{ diploma\_files : has
>
> diplomas \|\|\--o{ approval\_logs : logs
>
> diplomas \|\|\--o{ chain\_logs : chainLogs

***Hình 3.4: Mô hình thực thể liên kết (ERD)***

> ***3.4.2. Cơ sở dữ liệu***

CSDL PostgreSQL được thiết kế theo hướng tối giản nhưng đủ thông tin để
vận hành vòng đời hồ sơ và hỗ trợ truy vết. Đối với dữ liệu lịch sử, hệ
thống sử dụng approval\_logs và chain\_logs theo hướng chỉ ghi bổ sung
(append-only), hạn chế chỉnh sửa dữ liệu cũ. Đối với tệp đính kèm, bảng
diploma\_files lưu trực tiếp nội dung tệp dưới dạng BYTEA.

> ***3.4.3. Phân tích các bảng dữ liệu***

Cấu trúc chi tiết của các bảng dữ liệu được mô tả theo dạng từ điển dữ
liệu (data dictionary) như sau.

**Bảng 3.9: Bảng users**

  ---------------- ------------------ -------------------------------------
  **Tên trường**   **Kiểu dữ liệu**   **Ghi chú**
  id               BIGSERIAL          Khóa chính
  username         TEXT               Tên đăng nhập, duy nhất
  password\_hash   TEXT               Mật khẩu đã băm (bcrypt)
  role             TEXT               Vai trò: ADMIN/STAFF/MANAGER/ISSUER
  created\_at      TIMESTAMPTZ        Thời điểm tạo tài khoản
  ---------------- ------------------ -------------------------------------

**Bảng 3.10: Bảng diplomas**

  ------------------ ------------------ ------------------------------------------
  **Tên trường**     **Kiểu dữ liệu**   **Ghi chú**
  id                 BIGSERIAL          Khóa chính
  serial\_no         TEXT               Số hiệu văn bằng, duy nhất
  student\_id        TEXT               Mã sinh viên
  student\_name      TEXT               Họ và tên sinh viên
  birth\_date        DATE               Ngày sinh
  major              TEXT               Ngành học
  ranking            TEXT               Xếp loại
  gpa                TEXT               Điểm GPA
  graduation\_year   INT                Năm tốt nghiệp
  status             TEXT               PENDING/APPROVED/REJECTED/ISSUED/REVOKED
  created\_by        BIGINT             Người tạo (FK users.id)
  approved\_by       BIGINT             Người duyệt (FK users.id)
  issued\_by         BIGINT             Người phát hành (FK users.id)
  revoked\_by        BIGINT             Người thu hồi (FK users.id)
  approved\_at       TIMESTAMPTZ        Thời điểm duyệt
  issued\_at         TIMESTAMPTZ        Thời điểm phát hành
  revoked\_at        TIMESTAMPTZ        Thời điểm thu hồi
  rejected\_reason   TEXT               Lý do từ chối
  rejected\_role     VARCHAR(20)        Vai trò từ chối: MANAGER hoặc ISSUER
  rejected\_at       TIMESTAMPTZ        Thời điểm từ chối
  created\_at        TIMESTAMPTZ        Thời điểm tạo hồ sơ
  updated\_at        TIMESTAMPTZ        Tự cập nhật khi sửa
  ------------------ ------------------ ------------------------------------------

**Bảng 3.11: Bảng diploma\_files**

  ---------------- ------------------ -----------------------------
  **Tên trường**   **Kiểu dữ liệu**   **Ghi chú**
  id               BIGSERIAL          Khóa chính
  diploma\_id      BIGINT             FK tới diplomas.id
  kind             TEXT               PORTRAIT/DIPLOMA/TRANSCRIPT
  filename         TEXT               Tên tệp gốc
  mime\_type       TEXT               Định dạng tệp (MIME)
  size\_bytes      INT                Kích thước tệp
  data             BYTEA              Nội dung tệp
  uploaded\_at     TIMESTAMPTZ        Thời điểm tải lên
  ---------------- ------------------ -----------------------------

**Bảng 3.12: Bảng approval\_logs**

  ---------------- ------------------ -------------------------------
  **Tên trường**   **Kiểu dữ liệu**   **Ghi chú**
  id               BIGSERIAL          Khóa chính
  diploma\_id      BIGINT             FK tới diplomas.id
  actor\_id        BIGINT             Người thực hiện (FK users.id)
  action           TEXT               APPROVE/REJECT
  note             TEXT               Ghi chú/lý do
  created\_at      TIMESTAMPTZ        Thời điểm ghi log
  ---------------- ------------------ -------------------------------

**Bảng 3.13: Bảng chain\_logs**

  ----------------- ------------------ -------------------------------
  **Tên trường**    **Kiểu dữ liệu**   **Ghi chú**
  id                BIGSERIAL          Khóa chính
  diploma\_id       BIGINT             FK tới diplomas.id
  actor\_id         BIGINT             Người thực hiện (FK users.id)
  action            TEXT               ISSUE/REVOKE
  tx\_id            TEXT               Mã giao dịch Fabric, duy nhất
  record\_hash      TEXT               recordHash (64 hex)
  onchain\_status   TEXT               ISSUED/REVOKED
  created\_at       TIMESTAMPTZ        Thời điểm ghi log
  ----------------- ------------------ -------------------------------

**3.5. Cài đặt hệ thống**

Phần này trình bày các đoạn mã cài đặt tiêu biểu nhằm minh họa cách hệ
thống hiện thực hóa mô hình Hybrid. Trọng tâm gồm: tạo recordHash từ dữ
liệu và tệp Off-chain, tạo ví phát hành (wallet.json) bằng Fabric CA,
gửi giao dịch phát hành/thu hồi thông qua Fabric Gateway, và luồng xác
thực theo yêu cầu.

> ***3.5.1. Tạo canonical text và recordHash (Node.js)***

Đoạn mã dưới đây minh họa cách chuẩn hóa dữ liệu theo thứ tự trường cố
định và băm SHA-256 để tạo recordHash.

> // backend/services/recordHash.js (rút gọn)
>
> export function buildCanonicalText(fields) {
>
> const lines = \[
>
> \`serialNo=\${normStr(fields.serialNo)}\`,
>
> \`studentId=\${normStr(fields.studentId)}\`,
>
> \`studentName=\${normStr(fields.studentName)}\`,
>
> \`birthDate=\${normDate(fields.birthDate)}\`,
>
> \`major=\${normStr(fields.major)}\`,
>
> \`ranking=\${normStr(fields.ranking)}\`,
>
> \`gpa=\${normGpa(fields.gpa)}\`,
>
> \`graduationYear=\${normYear(fields.graduationYear)}\`,
>
> \`portraitSha256=\${fields.portraitSha256 \|\| \"\"}\`,
>
> \`diplomaSha256=\${fields.diplomaSha256 \|\| \"\"}\`,
>
> \`transcriptSha256=\${fields.transcriptSha256 \|\| \"\"}\`,
>
> \];
>
> return lines.join(\"\\n\");
>
> }
>
> export function computeRecordHash(canonicalText) {
>
> return sha256Hex(Buffer.from(canonicalText, \"utf8\"));
>
> }

***Hình 3.5: Tính recordHash từ dữ liệu và tệp đính kèm***

> ***3.5.2. Tạo ví phát hành (wallet.json) bằng Fabric CA***

Đoạn mã sau minh họa API tạo danh tính phát hành và xuất ra wallet.json
gồm mspId, certificate và privateKey.

> // backend/routes/issuer.js (rút gọn)
>
> router.post(\"/wallet\", requireAuth, requireRole(\"ISSUER\"), async
> (req, res) =\> {
>
> const caClient = new FabricCAServices(caUrl, { trustedRoots, verify },
> caName);
>
> const adminEnrollment = await caClient.enroll({
>
> enrollmentID: registrarId, enrollmentSecret: registrarSecret
>
> });
>
> const adminUser = new User(registrarId);
>
> await adminUser.setEnrollment(adminEnrollment.key,
> adminEnrollment.certificate, mspId);
>
> const enrollmentID = \`issuer\_\${Date.now()}\`;
>
> const enrollmentSecret = await caClient.register(
>
> { enrollmentID, affiliation, role: \"client\" }, adminUser
>
> );
>
> const issuerEnrollment = await caClient.enroll({ enrollmentID,
> enrollmentSecret });
>
> res.send(JSON.stringify({
>
> mspId,
>
> certificate: issuerEnrollment.certificate,
>
> privateKey: issuerEnrollment.key.toBytes()
>
> }, null, 2));
>
> });

***Hình 3.6: Tạo wallet.json phục vụ ký giao dịch***

> ***3.5.3. Gọi giao dịch phát hành/thu hồi trên Fabric (Fabric
> Gateway)***

Đoạn mã sau minh họa cách gửi giao dịch IssueDiploma và RevokeDiploma
thông qua Fabric Gateway, sử dụng wallet.json do ISSUER tải lên để ký
giao dịch.

> // backend/services/fabricDiploma.js (rút gọn)
>
> export async function chainIssueWithWallet(serialNo, diplomaData,
>
> mspId, certificate, privateKey) {
>
> const { contract, close } = connectWithWallet(mspId, certificate,
> privateKey);
>
> try {
>
> const out = await contract.submitTransaction(
>
> \"IssueDiploma\", serialNo, JSON.stringify(diplomaData)
>
> );
>
> return JSON.parse(Buffer.from(out).toString(\"utf8\"));
>
> } finally { close(); }
>
> }
>
> export async function chainRevokeWithWallet(serialNo, revokedAtISO,
>
> mspId, certificate, privateKey) {
>
> const { contract, close } = connectWithWallet(mspId, certificate,
> privateKey);
>
> try {
>
> const out = await contract.submitTransaction(\"RevokeDiploma\",
> serialNo, revokedAtISO);
>
> return JSON.parse(Buffer.from(out).toString(\"utf8\"));
>
> } finally { close(); }
>
> }

***Hình 3.7: Gửi giao dịch phát hành/thu hồi lên Fabric***

> ***3.5.4. Luồng xác thực theo yêu cầu --- check-on-demand (Public
> API)***

API công khai /verify thực hiện đối soát tại thời điểm PUBLIC yêu cầu
xác thực: kiểm tra điều kiện công khai Off-chain, tính recordHash
Off-chain, đọc bản ghi On-chain và so khớp để đưa ra kết luận.

> // backend/routes/public.js (rút gọn)
>
> router.get(\"/verify\", async (req, res) =\> {
>
> const serialNo = (req.query.serialNo \|\| \"\").trim();
>
> // (1) kiểm tra off-chain: chỉ công khai ISSUED/REVOKED
>
> const r = await pool.query(
>
> \"SELECT id, serial\_no, status FROM diplomas WHERE serial\_no=\$1\",
> \[serialNo\]
>
> );
>
> // (2) tính recordHash off-chain
>
> const computedRecordHash =
>
> (await computeRecordHashByDiplomaId(r.rows\[0\].id)).recordHash;
>
> // (3) đọc on-chain
>
> const oc = await chainRead(serialNo);
>
> // (4) đối chiếu
>
> const match = computedRecordHash === oc.recordHash;
>
> res.json({ serialNo, computedRecordHash, onchain: oc, match });
>
> });

***Hình 3.8: Xác thực văn bằng theo mô hình check-on-demand***

> ***3.5.5. Chaincode phát hành/thu hồi (Hyperledger Fabric)***

Đoạn mã chaincode dưới đây minh họa thao tác phát hành/thu hồi ở lớp
On-chain, bao gồm kiểm tra điều kiện và cập nhật bản ghi trong world
state.

> // chaincode/vanbang-chaincode/lib/vanbangContract.js (rút gọn)
>
> async IssueDiploma(ctx, serialNo, jsonRecordString) {
>
> const exists = await ctx.stub.getState(serialNo);
>
> if (exists && exists.length \> 0) throw new
> Error(\"ALREADY\_EXISTS\");
>
> let input;
>
> try { input = JSON.parse(jsonRecordString); }
>
> catch (e) { throw new Error(\"INVALID\_JSON: \" + e.message); }
>
> const requiredFields =
> \[\"studentId\",\"studentName\",\"birthDate\",\"major\",
>
> \"ranking\",\"gpa\",\"graduationYear\",\"recordHash\"\];
>
> for (const f of requiredFields) {
>
> if (!input\[f\]) throw new Error(\`MISSING\_FIELD: \${f}\`);
>
> }
>
> const recordHash = input.recordHash.trim().toLowerCase();
>
> if (!/\^\[0-9a-f\]{64}\$/.test(recordHash))
>
> throw new Error(\"recordHash must be 64 hex chars\");
>
> const obj = { serialNo, \...input, recordHash,
>
> status: \"ISSUED\", issuedAt: input.issuedAt \|\| new
> Date().toISOString(),
>
> revokedAt: null, txId: ctx.stub.getTxID() };
>
> await ctx.stub.putState(serialNo, Buffer.from(JSON.stringify(obj)));
>
> return JSON.stringify(obj);
>
> }
>
> async RevokeDiploma(ctx, serialNo, revokedAt) {
>
> const data = await ctx.stub.getState(serialNo);
>
> if (!data \|\| data.length === 0) throw new Error(\"NOT\_FOUND\");
>
> const obj = JSON.parse(data.toString());
>
> if (obj.status !== \"ISSUED\") throw new Error(\"NOT\_ISSUED\");
>
> obj.status = \"REVOKED\";
>
> obj.revokedAt = revokedAt \|\| new Date().toISOString();
>
> obj.txId = ctx.stub.getTxID();
>
> await ctx.stub.putState(serialNo, Buffer.from(JSON.stringify(obj)));
>
> return JSON.stringify(obj);
>
> }

***Hình 3.9: Chaincode phát hành/thu hồi văn bằng***

**CHƯƠNG 4. TRIỂN KHAI VÀ KIỂM THỬ HỆ THỐNG**

**4.1. Môi trường triển khai**

*\[Bổ sung: mô tả công cụ, framework, phiên bản phần mềm sử dụng\]*

**4.2. Triển khai Chaincode lên Hyperledger Fabric**

*\[Bổ sung nội dung\]*

**4.3. Cài đặt và triển khai ứng dụng web**

*\[Bổ sung nội dung\]*

**4.4. Kiểm thử hệ thống**

> ***4.4.1. Kế hoạch kiểm thử***

*\[Bổ sung nội dung\]*

> ***4.4.2. Kết quả kiểm thử***

*\[Bổ sung nội dung\]*

**4.5. Đánh giá kết quả**

*\[Bổ sung nội dung\]*

**KẾT LUẬN**

**1. Kết quả đạt được**

*\[Bổ sung nội dung\]*

**2. Hạn chế**

*\[Bổ sung nội dung\]*

**3. Hướng phát triển**

*\[Bổ sung nội dung\]*

**TÀI LIỆU THAM KHẢO**

*\[Danh mục tài liệu tham khảo --- chuẩn   IEEE\]*

**PHỤ LỤC**

*\[Phụ lục nếu có\]*
