export enum IconName {
  cart = "cart",
  dropdown = "dropdown",
  spinner = "spinner",
  arrowLeft = "arrowLeft",
  x = "x",
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  viewBox?: string;
}

export default function Icon({
  name,
  size = 24,
  color = "#585660",
  viewBox = "0 0 24 24",
  ...props
}: IconProps) {
  const icons = {
    [IconName.spinner]: (
      <path
        d="M64 32C64 49.674 49.674 64 32 64C14.326 64 0 49.674 0 32C0 14.326 14.326 0 32 0V4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32H64Z"
        fill={color}
      />
    ),
    [IconName.cart]: (
      <path
        d="M20.9709 15.9883H6.99233C6.72752 15.9883 6.47356 15.8829 6.28631 15.6954C6.09906 15.5079 5.99387 15.2535 5.99387 14.9883C5.99387 14.7231 6.09906 14.4687 6.28631 14.2812C6.47356 14.0936 6.72752 13.9883 6.99233 13.9883H17.4163C18.0839 13.9883 18.7324 13.765 19.2589 13.3537C19.7853 12.9424 20.1594 12.3668 20.3219 11.7183L21.9693 5.22828C22.0067 5.08069 22.01 4.92649 21.9788 4.77745C21.9477 4.62841 21.883 4.48846 21.7896 4.36828C21.6925 4.24501 21.5678 4.14638 21.4255 4.08036C21.2833 4.01434 21.1275 3.9828 20.9709 3.98828H6.7527C6.5467 3.40473 6.16553 2.89928 5.66144 2.54122C5.15735 2.18316 4.55502 1.99002 3.93702 1.98828H2.99847C2.73366 1.98828 2.47969 2.09364 2.29244 2.28117C2.1052 2.46871 2 2.72306 2 2.98828C2 3.2535 2.1052 3.50785 2.29244 3.69539C2.47969 3.88292 2.73366 3.98828 2.99847 3.98828H3.93702C4.16511 3.98163 4.38859 4.05341 4.57026 4.19169C4.75193 4.32998 4.88082 4.52641 4.93549 4.74828L4.9954 5.22828L6.72275 11.9883C5.92832 12.0241 5.18063 12.3745 4.64416 12.9624C4.10769 13.5503 3.82639 14.3276 3.86214 15.1233C3.89789 15.9189 4.24776 16.6678 4.83478 17.2051C5.42181 17.7424 6.1979 18.0241 6.99233 17.9883H7.17206C7.00784 18.4414 6.95508 18.9275 7.01822 19.4054C7.08137 19.8833 7.25857 20.3389 7.53482 20.7336C7.81106 21.1284 8.17823 21.4507 8.60521 21.6731C9.03219 21.8956 9.50642 22.0118 9.98773 22.0118C10.469 22.0118 10.9433 21.8956 11.3703 21.6731C11.7972 21.4507 12.1644 21.1284 12.4406 20.7336C12.7169 20.3389 12.8941 19.8833 12.9572 19.4054C13.0204 18.9275 12.9676 18.4414 12.8034 17.9883H15.1598C14.9956 18.4414 14.9428 18.9275 15.006 19.4054C15.0691 19.8833 15.2463 20.3389 15.5225 20.7336C15.7988 21.1284 16.166 21.4507 16.5929 21.6731C17.0199 21.8956 17.4941 22.0118 17.9755 22.0118C18.4568 22.0118 18.931 21.8956 19.358 21.6731C19.785 21.4507 20.1521 21.1284 20.4284 20.7336C20.7046 20.3389 20.8818 19.8833 20.945 19.4054C21.0081 18.9275 20.9553 18.4414 20.7911 17.9883H20.9709C21.2357 17.9883 21.4896 17.8829 21.6769 17.6954C21.8641 17.5079 21.9693 17.2535 21.9693 16.9883C21.9693 16.7231 21.8641 16.4687 21.6769 16.2812C21.4896 16.0936 21.2357 15.9883 20.9709 15.9883ZM19.6928 5.98828L18.3848 11.2283C18.3302 11.4502 18.2013 11.6466 18.0196 11.7849C17.8379 11.9231 17.6144 11.9949 17.3864 11.9883H8.7696L7.2719 5.98828H19.6928ZM9.98773 19.9883C9.79025 19.9883 9.59721 19.9296 9.43301 19.8198C9.26881 19.7099 9.14084 19.5537 9.06527 19.371C8.9897 19.1882 8.96992 18.9872 9.00845 18.7932C9.04698 18.5992 9.14207 18.421 9.28171 18.2812C9.42135 18.1413 9.59926 18.0461 9.79294 18.0075C9.98662 17.9689 10.1874 17.9887 10.3698 18.0644C10.5523 18.1401 10.7082 18.2683 10.8179 18.4327C10.9276 18.5972 10.9862 18.7905 10.9862 18.9883C10.9862 19.2535 10.881 19.5079 10.6938 19.6954C10.5065 19.8829 10.2525 19.9883 9.98773 19.9883ZM17.9755 19.9883C17.778 19.9883 17.5849 19.9296 17.4207 19.8198C17.2565 19.7099 17.1286 19.5537 17.053 19.371C16.9774 19.1882 16.9577 18.9872 16.9962 18.7932C17.0347 18.5992 17.1298 18.421 17.2694 18.2812C17.4091 18.1413 17.587 18.0461 17.7807 18.0075C17.9744 17.9689 18.1751 17.9887 18.3576 18.0644C18.54 18.1401 18.6959 18.2683 18.8057 18.4327C18.9154 18.5972 18.9739 18.7905 18.9739 18.9883C18.9739 19.2535 18.8687 19.5079 18.6815 19.6954C18.4942 19.8829 18.2403 19.9883 17.9755 19.9883Z"
        fill={color}
      />
    ),
    [IconName.dropdown]: (
      <path
        d="M12.7371 15.5245L18.3871 9.86448C18.4808 9.77152 18.5552 9.66091 18.606 9.53906C18.6567 9.4172 18.6829 9.28649 18.6829 9.15448C18.6829 9.02247 18.6567 8.89176 18.606 8.7699C18.5552 8.64804 18.4808 8.53744 18.3871 8.44448C18.1997 8.25823 17.9462 8.15369 17.6821 8.15369C17.4179 8.15369 17.1644 8.25823 16.9771 8.44448L11.9771 13.3945L7.02706 8.44448C6.8397 8.25823 6.58625 8.15369 6.32206 8.15369C6.05788 8.15369 5.80442 8.25823 5.61706 8.44448C5.52257 8.53709 5.4474 8.64754 5.39591 8.76941C5.34441 8.89129 5.31761 9.02217 5.31706 9.15448C5.31761 9.28679 5.34441 9.41767 5.39591 9.53954C5.4474 9.66142 5.52257 9.77186 5.61706 9.86448L11.2671 15.5245C11.3607 15.626 11.4744 15.707 11.6009 15.7624C11.7274 15.8178 11.864 15.8464 12.0021 15.8464C12.1402 15.8464 12.2768 15.8178 12.4033 15.7624C12.5298 15.707 12.6434 15.626 12.7371 15.5245Z"
        fill={color}
      />
    ),
    [IconName.arrowLeft]: (
      <path
        d="M6.07756 12.3809C6.12515 12.5037 6.19652 12.6158 6.28756 12.7109L11.2876 17.7109C11.3808 17.8042 11.4915 17.8781 11.6133 17.9286C11.7351 17.979 11.8657 18.005 11.9976 18.005C12.2639 18.005 12.5193 17.8992 12.7076 17.7109C12.8008 17.6177 12.8748 17.507 12.9252 17.3852C12.9757 17.2633 13.0016 17.1328 13.0016 17.0009C13.0016 16.7346 12.8959 16.4792 12.7076 16.2909L9.40756 13.0009L16.9976 13.0009C17.2628 13.0009 17.5171 12.8956 17.7047 12.708C17.8922 12.5205 17.9976 12.2661 17.9976 12.0009C17.9976 11.7357 17.8922 11.4813 17.7047 11.2938C17.5171 11.1063 17.2628 11.0009 16.9976 11.0009L9.40756 11.0009L12.7076 7.71091C12.8013 7.61795 12.8757 7.50735 12.9265 7.38549C12.9772 7.26363 13.0034 7.13292 13.0034 7.00091C13.0034 6.8689 12.9772 6.7382 12.9265 6.61634C12.8757 6.49448 12.8013 6.38388 12.7076 6.29091C12.6146 6.19719 12.504 6.12279 12.3821 6.07202C12.2603 6.02125 12.1296 5.99511 11.9976 5.99511C11.8655 5.99511 11.7348 6.02125 11.613 6.07202C11.4911 6.12279 11.3805 6.19719 11.2876 6.29091L6.28756 11.2909C6.19652 11.386 6.12515 11.4982 6.07756 11.6209C5.97754 11.8644 5.97754 12.1375 6.07756 12.3809Z"
        fill={color}
      />
    ),
    [IconName.x]: (
      <path
        d="M13.4099 11.9991L17.7099 7.70909C17.8982 7.52078 18.004 7.26539 18.004 6.99909C18.004 6.73279 17.8982 6.47739 17.7099 6.28909C17.5216 6.10078 17.2662 5.995 16.9999 5.995C16.7336 5.995 16.4782 6.10078 16.2899 6.28909L11.9999 10.5891L7.70994 6.28909C7.52164 6.10078 7.26624 5.995 6.99994 5.995C6.73364 5.995 6.47824 6.10078 6.28994 6.28909C6.10164 6.47739 5.99585 6.73279 5.99585 6.99909C5.99585 7.26539 6.10164 7.52078 6.28994 7.70909L10.5899 11.9991L6.28994 16.2891C6.19621 16.3821 6.12182 16.4927 6.07105 16.6145C6.02028 16.7364 5.99414 16.8671 5.99414 16.9991C5.99414 17.1311 6.02028 17.2618 6.07105 17.3837C6.12182 17.5055 6.19621 17.6161 6.28994 17.7091C6.3829 17.8028 6.4935 17.8772 6.61536 17.928C6.73722 17.9787 6.86793 18.0049 6.99994 18.0049C7.13195 18.0049 7.26266 17.9787 7.38452 17.928C7.50638 17.8772 7.61698 17.8028 7.70994 17.7091L11.9999 13.4091L16.2899 17.7091C16.3829 17.8028 16.4935 17.8772 16.6154 17.928C16.7372 17.9787 16.8679 18.0049 16.9999 18.0049C17.132 18.0049 17.2627 17.9787 17.3845 17.928C17.5064 17.8772 17.617 17.8028 17.7099 17.7091C17.8037 17.6161 17.8781 17.5055 17.9288 17.3837C17.9796 17.2618 18.0057 17.1311 18.0057 16.9991C18.0057 16.8671 17.9796 16.7364 17.9288 16.6145C17.8781 16.4927 17.8037 16.3821 17.7099 16.2891L13.4099 11.9991Z"
        fill={color}
      />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
