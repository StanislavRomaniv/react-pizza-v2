import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: FC = () => (
    <div className="card__wrapper">
        <ContentLoader speed={2} width={280} height={500} viewBox="0 0 280 500" backgroundColor="#f3f3f3" foregroundColor="#e6e6e6">
            <rect x="2" y="293" rx="10" ry="10" width="273" height="25" />
            <circle cx="136" cy="130" r="128" />
            <rect x="1" y="343" rx="10" ry="10" width="273" height="78" />
            <rect x="2" y="445" rx="10" ry="10" width="112" height="35" />
            <rect x="160" y="445" rx="10" ry="10" width="112" height="35" />
        </ContentLoader>
    </div>
);

export default MyLoader;
