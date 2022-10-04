import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

export const Vietnamese = () => {
    return (
        <div className={cx('content')}>
            <h1>Xin Chao ! 👋</h1>
            <p>
                Đó là một ngày tháng tư sáng lạnh, vừa lúc đồng hồ điểm báo mười ba trăm. Cằm rụt xuống ngực để mong
                tránh gió ác, Winston Smith lướt nhanh qua cửa kính của khu Nhà Chiến Thắng nhưng không đủ nhanh để ngăn
                một luồng bụi cát lùa vào theo anh.
            </p>
            <p>
                Hành lang hôi mùi cải luộc chiếu nát. Nơi một phía đầu tường thấy phô một tấm bích chương mầu, quá lớn
                để mang trang trí trong nhà. Nó hình dung một gương mặt kếch xù, rộng hơn một thước : mặt một người đàn
                ông chừng bốn mươi nhăm tuổi, có râu đen dày và nét đẹp cứng cáp. Winston leo lên cầu thang. Thử thang
                máy vô ích. Thuở thịnh nhất thỉnh thoảng máy mới chạy, nữa là bây giờ điện lại bị cúp vào ban ngày. Biện
                pháp này thuộc phong trào tiết kiệm sửa soạn “Tuần lễ Hận thù”. Căn phòng của Winston ở tận lầu bẩy, anh
                đã ba mươi chín tuổi lại mắc chứng loét giãn tĩnh mạch nơi đầu gối phải, nên anh đi chậm chạp, dừng nghỉ
                nhiều lần giữa cầu thang. Tại mỗi thềm, trước lồng thang máy, tấm bích chương với gương mặt kếch xù từ
                tường nhìn ra. Đấy là một loại tranh được bố trí sao cho cặp mắt tuồng như theo dõi từng cử động bên
                ngoài. BÁC ĐANG NHÌN BẠN, dưới bức tranh có lời ghi như vậy.
            </p>
        </div>
    );
};

export const Korean = () => {
    return (
        <div className={cx('content')}>
            <h1>안녕하세요! 👋</h1>
            <p>
                중국은 인구가 가장많은 나라로 유명하기 때문에 다양한 사람들이 살고있는 나라중의 하나이기도 하고
                해외여행을 가게되면 중국안에서 여러가지 다양한 볼거리와 먹거리를 제공하는곳이기도 하고 말이죠. 그만큼
                중국은 정말 강대국으로 떠오르고있는 나라중의 하나이기도해요~
            </p>
            <p>
                미국인들은 대화하면서 눈을 마주치면서 이야기하는 것을 중요시합니다. 눈을 피하면 자신감이 없거나 무엇을
                숨긴다고 생각해서 별로 좋아하지 않습니다. 그리고 중국에서는 개인접시에 담은건 당연히 다먹어야하지만
                그릇자체를 다 비우는건실례되는 행동이라고해요
            </p>
            <p>
                미국인들은 큰 접시를 식탁 가운데 놓고 덜어먹는 것이 아니라 원모양으로 돌려서 각자 덜어서 먹는 것이
                보편적이 음식을 먹을 때 입을 크게 벌리지 마세요. 한국과 마찬가지입니다. 음식을 드실 때는 음식물이 보이지
                않도록 주의하셔서 음식을 섭취하셔야 하며, 말을 할 때에는 입안의 음식물을 삼킨 다음 말을 하도록 합니다.
            </p>
        </div>
    );
};

export const English = () => {
    return (
        <div className={cx('content')}>
            <h1>Hey. What's up ? 👋</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
};
