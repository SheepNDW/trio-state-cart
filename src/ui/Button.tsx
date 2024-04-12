import { To, Link } from 'react-router-dom';

function Button({
  children,
  size = 'medium',
  color = 'primary',
  className,
  onClick,
  to,
}: {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  to?: To;
}) {
  const colorClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  const sizeClasses = {
    small: 'px-2 py-2 text-sm rounded-full flex items-center justify-center',
    medium: 'px-4 py-2 text-base rounded',
    large: 'px-6 py-3 text-lg rounded-lg',
  };

  const styles = `${colorClasses[color]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link className={styles} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={() => onClick?.()}>
      {children}
    </button>
  );
}

export default Button;
