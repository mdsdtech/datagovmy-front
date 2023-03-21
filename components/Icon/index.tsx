import { FunctionComponent } from "react";

interface IconProps {
  className?: string;
}

export const UsersIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2886_13900)">
        <path
          d="M8.33355 12.5555C6.25355 12.5555 2.11133 13.5955 2.11133 15.6667V17.2222H14.5558V15.6667C14.5558 13.5955 10.4135 12.5555 8.33355 12.5555ZM4.19133 15.4444C4.93799 14.9289 6.74244 14.3333 8.33355 14.3333C9.92466 14.3333 11.7291 14.9289 12.4758 15.4444H4.19133ZM8.33355 11C10.0491 11 11.4447 9.60444 11.4447 7.88888C11.4447 6.17333 10.0491 4.77777 8.33355 4.77777C6.61799 4.77777 5.22244 6.17333 5.22244 7.88888C5.22244 9.60444 6.61799 11 8.33355 11ZM8.33355 6.55555C9.07133 6.55555 9.66688 7.1511 9.66688 7.88888C9.66688 8.62666 9.07133 9.22222 8.33355 9.22222C7.59577 9.22222 7.00022 8.62666 7.00022 7.88888C7.00022 7.1511 7.59577 6.55555 8.33355 6.55555ZM14.5913 12.6089C15.6224 13.3555 16.3335 14.3511 16.3335 15.6667V17.2222H19.8891V15.6667C19.8891 13.8711 16.778 12.8489 14.5913 12.6089ZM13.6669 11C15.3824 11 16.778 9.60444 16.778 7.88888C16.778 6.17333 15.3824 4.77777 13.6669 4.77777C13.1869 4.77777 12.7424 4.89333 12.3335 5.08888C12.8935 5.87999 13.2224 6.84888 13.2224 7.88888C13.2224 8.92888 12.8935 9.89777 12.3335 10.6889C12.7424 10.8844 13.1869 11 13.6669 11Z"
          fill="#0F172A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2886_13900">
          <rect
            width="21.3333"
            height="21.3333"
            fill="white"
            transform="translate(0.333496 0.333313)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EconomicGrowthIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="19"
      height="12"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.0558 0.666626L15.0913 2.70218L10.7535 7.03996L7.19799 3.4844L0.611328 10.08L1.86466 11.3333L7.19799 5.99996L10.7535 9.55551L16.3535 3.9644L18.3891 5.99996V0.666626H13.0558Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const BankIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.11133 8.22223H2.33355V14.4445H4.11133V8.22223ZM9.44466 8.22223H7.66688V14.4445H9.44466V8.22223ZM17.0002 16.2222H0.111328V18H17.0002V16.2222ZM14.778 8.22223H13.0002V14.4445H14.778V8.22223ZM8.55577 2.23112L13.1869 4.66667H3.92466L8.55577 2.23112ZM8.55577 0.222229L0.111328 4.66667V6.44445H17.0002V4.66667L8.55577 0.222229Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const UnemploymentIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.8229 7.22219L9.50022 9.54488L7.17755 7.22219L5.94466 8.45509L8.26732 10.7778L5.94471 13.1004L7.1776 14.3333L9.50022 12.0107L11.8228 14.3333L13.0557 13.1004L10.7331 10.7778L13.0558 8.45509L11.8229 7.22219Z"
        fill="#0F172A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3891 5.44442C18.3891 4.45775 17.598 3.66664 16.6113 3.66664H13.0558V1.88886C13.0558 0.902195 12.2647 0.111084 11.278 0.111084H7.72244C6.73577 0.111084 5.94466 0.902195 5.94466 1.88886V3.66664H2.38911C1.40244 3.66664 0.620217 4.45775 0.620217 5.44442L0.611328 16.1111C0.611328 17.0977 1.40244 17.8889 2.38911 17.8889H16.6113C17.598 17.8889 18.3891 17.0977 18.3891 16.1111V5.44442ZM11.278 1.88886V3.66664H7.72244V1.88886H11.278ZM2.38911 16.1111V5.44442H16.6113V16.1111H2.38911Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const InflationIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.44466 11.7689L6.77799 6.42663L10.3335 9.98219L17.8891 1.48441L16.6358 0.231079L10.3335 7.31552L6.77799 3.75997L0.111328 10.4355L1.44466 11.7689Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const ProductionIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3891 17.8889H0.611328V7.22219L6.83355 4.55553V6.33331L11.278 4.55553V7.22219H13.9447L14.8335 0.111084H17.5002L18.3891 7.22219V17.8889ZM9.50022 7.17775L5.05577 8.95553V7.22219L2.38911 8.39553V16.1111H16.6113V8.99997H9.50022V7.17775ZM8.61133 14.3333H10.3891V10.7778H8.61133V14.3333ZM5.05577 14.3333H6.83355V10.7778H5.05577V14.3333ZM13.9447 10.7778H12.1669V14.3333H13.9447V10.7778Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const IndustryIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.3335 8.93336C5.3335 10.3822 6.52461 11.5556 8.00016 11.5556C9.47572 11.5556 10.6668 10.3822 10.6668 8.93336C10.6668 7.76892 10.1957 7.43114 8.00016 4.88892C5.79572 7.44892 5.3335 7.77781 5.3335 8.93336Z"
        fill="#0F172A"
      />
      <path
        d="M15.1111 8.88889C15.6 8.88889 16 8.48889 16 8C16 7.51111 15.6 7.11111 15.1111 7.11111H14.2222V1.77778H15.1111C15.6 1.77778 16 1.37778 16 0.888889C16 0.4 15.6 0 15.1111 0H0.888889C0.4 0 0 0.4 0 0.888889C0 1.37778 0.4 1.77778 0.888889 1.77778H1.77778V7.11111H0.888889C0.4 7.11111 0 7.51111 0 8C0 8.48889 0.4 8.88889 0.888889 8.88889H1.77778V14.2222H0.888889C0.4 14.2222 0 14.6222 0 15.1111C0 15.6 0.4 16 0.888889 16H15.1111C15.6 16 16 15.6 16 15.1111C16 14.6222 15.6 14.2222 15.1111 14.2222H14.2222V8.88889H15.1111ZM12.4444 14.2222H3.55556V8.88889C4.04445 8.88889 4.44445 8.48889 4.44445 8C4.44445 7.51111 4.04445 7.11111 3.55556 7.11111V1.77778H12.4444V7.11111C11.9556 7.11111 11.5556 7.51111 11.5556 8C11.5556 8.48889 11.9556 8.88889 12.4444 8.88889V14.2222Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const RetailTradeIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3003 5.23556L17.367 1.35111C17.1714 0.551111 16.4781 0 15.6692 0H3.32255C2.52255 0 1.82033 0.56 1.63366 1.35111L0.700331 5.23556C0.486998 6.14222 0.682554 7.06667 1.25144 7.79556C1.32255 7.89333 1.42033 7.96445 1.50033 8.05334V14.2222C1.50033 15.2 2.30033 16 3.27811 16H15.7226C16.7003 16 17.5003 15.2 17.5003 14.2222V8.05334C17.5803 7.97333 17.6781 7.89333 17.7492 7.80445C18.3181 7.07556 18.5226 6.14222 18.3003 5.23556ZM15.6426 1.76889L16.5759 5.65333C16.6648 6.02667 16.5848 6.4 16.3537 6.69333C16.2292 6.85333 15.9626 7.11111 15.5181 7.11111C14.9759 7.11111 14.5048 6.67556 14.4426 6.09778L13.927 1.77778L15.6426 1.76889ZM10.3892 1.77778H12.1314L12.6114 5.79556C12.6559 6.14222 12.5492 6.48889 12.3181 6.74667C12.1226 6.97778 11.8381 7.11111 11.4737 7.11111C10.8781 7.11111 10.3892 6.58667 10.3892 5.94667V1.77778ZM6.38033 5.79556L6.86922 1.77778H8.61144V5.94667C8.61144 6.58667 8.12255 7.11111 7.46478 7.11111C7.16255 7.11111 6.887 6.97778 6.67366 6.74667C6.45144 6.48889 6.34478 6.14222 6.38033 5.79556ZM2.42478 5.65333L3.32255 1.77778H5.07366L4.55811 6.09778C4.487 6.67556 4.02478 7.11111 3.48255 7.11111C3.047 7.11111 2.77144 6.85333 2.65589 6.69333C2.41589 6.40889 2.33589 6.02667 2.42478 5.65333ZM3.27811 14.2222V8.86222C3.34922 8.87111 3.41144 8.88889 3.48255 8.88889C4.25589 8.88889 4.95811 8.56889 5.47366 8.04445C6.007 8.57778 6.71811 8.88889 7.527 8.88889C8.30033 8.88889 8.99366 8.56889 9.50922 8.06222C10.0337 8.56889 10.7448 8.88889 11.5448 8.88889C12.2914 8.88889 13.0026 8.57778 13.5359 8.04445C14.0514 8.56889 14.7537 8.88889 15.527 8.88889C15.5981 8.88889 15.6603 8.87111 15.7314 8.86222V14.2222H3.27811Z"
        fill="#0F172A"
      />
    </svg>
  );
};

export const BankNegaraIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_5)">
        <path
          d="M14.8261 0.268841C13.0696 0.407594 11.3217 0.832526 9.74784 1.50895C8.93914 1.85583 8.76523 1.95123 7.8261 2.50624C5.76523 3.73768 3.75653 5.73226 2.51305 7.80488C2.13914 8.41193 1.39131 9.90353 1.39131 10.0249C1.39131 10.051 1.33044 10.1984 1.26088 10.3458C1.06088 10.7968 0.643488 12.297 0.469575 13.2249C0.234792 14.439 0.234792 17.6477 0.469575 18.7317C0.721748 19.9111 1.0174 21.0125 1.2261 21.4634C1.26088 21.5588 1.37392 21.8276 1.46957 22.0705C1.65218 22.5561 2.17392 23.5707 2.60871 24.2818C4.00871 26.5713 6.40871 28.774 8.8261 29.9881C11.1565 31.1588 13.287 31.6531 15.9826 31.6531C18.6348 31.6444 20.6087 31.2022 22.8609 30.1095C25.4261 28.8607 27.6087 26.9355 29.1565 24.5594C29.8087 23.5707 30.7826 21.6108 30.7826 21.316C30.7826 21.2466 30.8174 21.1599 30.8609 21.1079C31.0174 20.9344 31.4348 19.148 31.6087 17.8732C31.8522 16.1908 31.7131 13.9621 31.2696 12.1843C31.087 11.4385 30.9565 10.9962 30.8783 10.7968C30.8348 10.7014 30.6696 10.3111 30.5131 9.92955C29.8783 8.37724 28.9304 6.8683 27.7739 5.54147C26.287 3.83307 24.1652 2.29811 22.1739 1.48293C21.9131 1.37887 21.6174 1.25746 21.5217 1.2141C21.3131 1.11871 19.7131 0.667757 19.087 0.529003C17.9739 0.286185 16.0783 0.164776 14.8261 0.268841ZM16.5391 4.65692C17.0957 4.87372 17.4261 5.15123 17.6783 5.62819C18.2174 6.60814 17.8 7.77887 16.7391 8.27318C16.1826 8.54201 15.8 8.55936 15.287 8.33388C14.2435 7.8916 13.7826 6.93768 14.1044 5.87968C14.2957 5.2206 15.2261 4.53551 15.9304 4.51816C16.0609 4.50949 16.3391 4.57887 16.5391 4.65692ZM20.0957 5.20326C20.0783 5.27263 20.0609 5.55014 20.0609 5.8103C20.0609 7.11979 21.3739 8.07372 22.687 7.71816C22.9913 7.64011 23.087 7.64011 23.1478 7.73551C23.2783 7.92629 22.6 8.45529 22 8.62006C21.5131 8.75881 21.4435 8.75881 20.9565 8.62006C19.9304 8.33388 19.3044 7.51871 19.3044 6.48673C19.3044 5.75827 19.6348 5.0038 19.9304 5.04716C20.0609 5.0645 20.1131 5.12521 20.0957 5.20326ZM10.7304 6.44337C11.1913 7.41464 11.2 7.55339 10.8348 7.96098C10.5652 8.25583 10.5217 8.3599 10.5217 8.75014C10.5217 9.41789 10.887 10.7274 11.6957 12.9041C11.9044 13.4764 12.2261 14.0748 12.4087 14.2396C12.887 14.6732 13.8783 14.7686 15.3565 14.5344C15.7826 14.465 16.6 14.3436 17.1739 14.2656C17.7478 14.1875 18.4696 14.0835 18.7826 14.0314C19.0957 13.9881 20.1739 13.9274 21.1739 13.9014C22.8261 13.858 23.0696 13.8753 23.7478 14.0401C24.1652 14.1442 24.5913 14.2222 24.7044 14.2222C25.1565 14.2222 25.7391 13.5545 25.7391 13.0428C25.7391 12.748 25.3565 12.1843 25.0435 12.0282C24.7913 11.8981 24.6087 11.8808 23.9739 11.9155C23.5565 11.9415 22.9131 12.0455 22.5391 12.1409C20.4783 12.6873 18.6348 12.9127 17.3565 12.7566C16.3131 12.6352 15.8957 12.4531 15.9304 12.1409C15.9652 11.8547 16.2696 11.8201 17.0783 12.0108C18.2087 12.2884 19.7391 12.1756 21.5652 11.69C23.7652 11.1003 24.5565 11.0396 25.3131 11.4211C25.6 11.5686 25.8957 11.8114 26.0609 12.0369C26.3131 12.3751 26.3478 12.4791 26.3478 12.9734C26.3478 13.6759 26.1478 14.0835 25.5826 14.5604L25.1565 14.916V15.5491C25.1478 16.3295 24.9391 16.8152 24.3391 17.4656L23.9044 17.9426L23.9913 18.5756C24.0435 18.9225 24.1217 19.6336 24.1739 20.1626C24.2783 21.3247 24.4696 23.0071 24.6609 24.4119C24.7304 24.9843 24.8 25.5913 24.8087 25.7561L24.8261 26.0596L24.3565 26.0856C23.7217 26.1203 23.6261 26.0076 23.9913 25.6347C24.2522 25.3659 24.2696 25.3138 24.1913 25.045C24.1391 24.8889 24.0783 24.5507 24.0435 24.2905C24.0174 24.0304 23.8522 23.2846 23.6783 22.6428C23.3304 21.29 23.2522 20.9778 23.1131 20.2233C23 19.651 22.8261 19.5122 22.7304 19.9198C22.6957 20.0585 22.4087 20.7957 22.0783 21.5675C21.2957 23.4146 20.6957 25.1924 20.6957 25.6347C20.6957 25.8862 20.6522 26.0163 20.5565 26.051C20.3304 26.1377 19.6696 26.1117 19.6 26.0076C19.5739 25.9556 19.6696 25.7908 19.8174 25.6347C20.087 25.3659 20.2348 24.993 20.5652 23.8049C20.6348 23.5621 20.7652 23.0938 20.8696 22.7642C21.1913 21.6455 21.7652 19.3041 21.8696 18.645C22 17.8645 21.9044 17.5176 21.487 17.3095C21.1304 17.1187 21.0783 17.1274 19.6957 17.4829C15.287 18.6016 14.8696 18.6797 13.7044 18.6276C13.1913 18.6016 12.7565 18.6103 12.7391 18.645C12.7131 18.6797 12.7565 19.0786 12.8348 19.5209C12.9652 20.3274 13.0783 21.0558 13.3478 22.9377C13.4261 23.458 13.5478 24.2385 13.6174 24.6634C13.687 25.0884 13.7391 25.548 13.7391 25.6781C13.7391 25.8081 13.7826 25.9469 13.8261 25.9729C13.9739 26.0683 13.9217 26.4412 13.7478 26.5366C13.5131 26.658 12.9304 26.6493 12.8 26.5192C12.7217 26.4412 12.7565 26.3545 12.9652 26.1377L13.2261 25.8688L13.0087 24.7935C12.7565 23.536 12.6348 23.0764 12.2522 21.897C12.1044 21.4201 11.8957 20.7089 11.7913 20.31C11.6696 19.8331 11.5739 19.6076 11.4957 19.6163C11.4261 19.6336 11.2696 19.9111 11.1391 20.2493C10.9044 20.8304 10.7913 21.0905 10.1131 22.5474C9.94784 22.903 9.73044 23.3886 9.64349 23.6314C9.54784 23.8656 9.44349 24.1431 9.40001 24.2385C9.0261 25.1144 8.78262 25.8862 8.78262 26.181C8.78262 26.4932 8.58262 26.6233 8.10436 26.6233C7.57392 26.6233 7.49566 26.4412 7.87827 26.103C8.18262 25.8428 8.43479 25.2878 8.69566 24.3252C8.73914 24.1778 8.89566 23.6748 9.04349 23.1978C9.20001 22.7209 9.37392 22.1225 9.44349 21.871C9.50436 21.6282 9.6261 21.1946 9.69566 20.9171C10.1391 19.2954 10.4348 17.7171 10.4348 16.9973C10.4348 16.3989 10.2435 15.3756 9.91305 14.1789C9.80871 13.7973 9.68697 13.3637 9.65218 13.2249C9.53044 12.7306 8.87827 10.8488 8.73914 10.5886C8.57392 10.2678 8.29566 10.181 7.78262 10.3111C7.57392 10.3631 7.32175 10.4065 7.2261 10.4065C7.00871 10.4065 6.98262 10.181 7.18262 9.96423C7.31305 9.82548 7.28697 9.79946 6.92175 9.63469C6.49566 9.45258 6.4261 9.29648 6.66957 9.05366C6.85218 8.88022 7.77392 8.45529 8.15653 8.36857C8.52175 8.29052 8.59131 8.10841 8.35653 7.85692C8.06088 7.54472 8.09566 7.33659 8.66088 6.08781C8.74784 5.91437 8.85218 5.8103 8.95653 5.8103C9.12175 5.8103 9.13044 5.87968 9.13044 6.72087C9.13044 7.51871 9.15653 7.65746 9.30436 7.80488C9.53044 8.03036 9.75653 8.02169 9.96523 7.79621C10.1044 7.64011 10.1304 7.46667 10.1391 6.77291C10.1478 5.50678 10.2522 5.44608 10.7304 6.44337Z"
          fill="#0F5087"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_5">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PusatDarahNegaraIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_421_6838)">
        <circle cx="16" cy="16" r="16" fill="#DC2626" />
        <path
          d="M11.5895 16.8211L16 8L20.4105 16.8211C21.3597 18.7195 20.9877 21.0123 19.4868 22.5132C17.5611 24.4389 14.4389 24.4389 12.5132 22.5132C11.0123 21.0123 10.6403 18.7195 11.5895 16.8211Z"
          stroke="white"
          strokeWidth={2}
        />
      </g>
      <defs>
        <clipPath id="clip0_421_6838">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const JabatanPendaftaranNegaraIcon: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_487_14848)">
        <circle cx="16" cy="16" r="16" fill="#2563EB" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.5 7.75C7.70435 7.75 6.94129 8.06607 6.37868 8.62868C5.81607 9.19129 5.5 9.95435 5.5 10.75V21.25C5.5 22.0456 5.81607 22.8087 6.37868 23.3713C6.94129 23.9339 7.70435 24.25 8.5 24.25H23.5C24.2956 24.25 25.0587 23.9339 25.6213 23.3713C26.1839 22.8087 26.5 22.0456 26.5 21.25V10.75C26.5 9.95435 26.1839 9.19129 25.6213 8.62868C25.0587 8.06607 24.2956 7.75 23.5 7.75H8.5ZM12.625 10.75C12.0283 10.75 11.456 10.9871 11.034 11.409C10.6121 11.831 10.375 12.4033 10.375 13C10.375 13.5967 10.6121 14.169 11.034 14.591C11.456 15.0129 12.0283 15.25 12.625 15.25C13.2217 15.25 13.794 15.0129 14.216 14.591C14.6379 14.169 14.875 13.5967 14.875 13C14.875 12.4033 14.6379 11.831 14.216 11.409C13.794 10.9871 13.2217 10.75 12.625 10.75ZM8.752 19.453C9.04323 18.6601 9.57078 17.9757 10.2634 17.4923C10.956 17.0088 11.7803 16.7496 12.625 16.7496C13.4697 16.7496 14.294 17.0088 14.9866 17.4923C15.6792 17.9757 16.2068 18.6601 16.498 19.453C16.5603 19.6229 16.5591 19.8096 16.4946 19.9787C16.4301 20.1477 16.3067 20.2878 16.147 20.373C15.063 20.9504 13.8532 21.2517 12.625 21.25C11.3968 21.2517 10.187 20.9504 9.103 20.373C8.94335 20.2878 8.81988 20.1477 8.75538 19.9787C8.69087 19.8096 8.68967 19.6229 8.752 19.453ZM19 12.25C18.8011 12.25 18.6103 12.329 18.4697 12.4697C18.329 12.6103 18.25 12.8011 18.25 13C18.25 13.1989 18.329 13.3897 18.4697 13.5303C18.6103 13.671 18.8011 13.75 19 13.75H22.75C22.9489 13.75 23.1397 13.671 23.2803 13.5303C23.421 13.3897 23.5 13.1989 23.5 13C23.5 12.8011 23.421 12.6103 23.2803 12.4697C23.1397 12.329 22.9489 12.25 22.75 12.25H19ZM18.25 16C18.25 15.8011 18.329 15.6103 18.4697 15.4697C18.6103 15.329 18.8011 15.25 19 15.25H22.75C22.9489 15.25 23.1397 15.329 23.2803 15.4697C23.421 15.6103 23.5 15.8011 23.5 16C23.5 16.1989 23.421 16.3897 23.2803 16.5303C23.1397 16.671 22.9489 16.75 22.75 16.75H19C18.8011 16.75 18.6103 16.671 18.4697 16.5303C18.329 16.3897 18.25 16.1989 18.25 16ZM19 18.25C18.8011 18.25 18.6103 18.329 18.4697 18.4697C18.329 18.6103 18.25 18.8011 18.25 19C18.25 19.1989 18.329 19.3897 18.4697 19.5303C18.6103 19.671 18.8011 19.75 19 19.75H22.75C22.9489 19.75 23.1397 19.671 23.2803 19.5303C23.421 19.3897 23.5 19.1989 23.5 19C23.5 18.8011 23.421 18.6103 23.2803 18.4697C23.1397 18.329 22.9489 18.25 22.75 18.25H19Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_487_14848">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
