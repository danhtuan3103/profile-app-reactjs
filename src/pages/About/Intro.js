import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

export const Vietnamese = () => {
    return (
        <div className={cx('content')}>
            <h1>Xin Chao ! 👋</h1>
            <p>
                Cục Hàng không Việt Nam cho biết, theo chủ trương của Bộ GTVT về việc khai thác các chuyến bay thường lệ
                chở khách quốc tế, trong các ngày 17 và 24.12.2021, cơ quan này đã có thư gửi một số đối tác, trong đó
                có Tổng cục Hàng không dân dụng Trung Quốc đề nghị khôi phục vận chuyển hành khách thường lệ giữa hai
                nước.
            </p>
            <p>
                Đến ngày 17.1.2022, Tổng cục Hàng không dân dụng Trung Quốc có thư phản hồi đối với đề xuất của Cục Hàng
                không Việt Nam. Theo đó, cơ quan này chia sẻ quan điểm của Cục Hàng không về tầm quan trọng của việc
                khôi phục các chuyến bay chở khách thường lệ giữa hai nước.
            </p>
            <p>
                Tổng cục Hàng không dân dụng Trung Quốc cũng chưa được giao thẩm quyền trao đổi với nhà chức trách hàng
                không các nước về việc khôi phục vận chuyển hành khách quốc tế. Do đó, Tổng cục Hàng không dân dụng
                Trung Quốc chưa thể đồng ý với đề xuất của Cục Hàng không về việc nối lại đường bay thường lệ. Tổng cục
                Hàng không dân dụng Trung Quốc cho biết sẽ cập nhật thông tin cho Cục Hàng không Việt Nam ngay khi phía
                Trung Quốc nới lỏng các biện pháp kiểm soát.
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
            <h1>Hey. What's up? Hello! 👋</h1>
            <p>
                As a graduate student, Saito worked as the fiction editor for Quince Magazine, a literary journal. In
                2006, her collection of stories won the Delaney Prize in Short Fiction. Tin & Copper Press will publish
                Saito’s debut novel in February 2020.
            </p>
            <p>
                In 2000, Saito began her editing career with Hopewell Books. She most valued the company’s collaborative
                work environment and its commitment to publishing diverse writers. Saito believes that her time at
                Hopewell was crucial in developing the ethics she practices in her career today.
            </p>
            <p>
                When not writing or editing, Saito enjoys surfing, kayaking and taking long drives down the Pacific
                Coast Highway. For up-to-date information, listen to her podcast, SaitoSpeaks. To hire Saito as a
                freelance editor, email her at saito.fumiko@domain.com.
            </p>
        </div>
    );
};
