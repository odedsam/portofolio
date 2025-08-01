import { skeleton } from '@/config';

type Props = {
  loading: boolean;
  children?: React.ReactNode;
  title?: string;
};

const GenCard = ({ loading, title, children }: Props) => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? skeleton({ widthCls: 'w-32', heightCls: 'h-8' }) : <span className="text-base-content opacity-70">{title}</span>}
          </h5>
        </div>
        <div className="text-base-content">
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default GenCard;
