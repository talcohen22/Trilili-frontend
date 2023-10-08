export function LogoApp({ color = '' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill={color} />
        </svg>)
}

export function ArrowDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" role="presentation" focusable="false" viewBox="0 0 24 24"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor" />
            <path xmlns="http://www.w3.org/2000/svg" d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor" />
        </svg>
    )
}

export function UserSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill="#44546f" /><path fillRule="evenodd" clipRule="evenodd" d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z" fill="#44546f" /></svg>
    )
}

export function StarSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.49495 20.995L11.9999 18.6266L16.5049 20.995C16.8059 21.1533 17.1507 21.2079 17.4859 21.1504C18.3276 21.006 18.893 20.2066 18.7486 19.3649L17.8882 14.3485L21.5328 10.7959C21.7763 10.5585 21.9348 10.2475 21.9837 9.91094C22.1065 9.06576 21.5209 8.28106 20.6758 8.15825L15.6391 7.42637L13.3866 2.86236C13.2361 2.55739 12.9892 2.31054 12.6843 2.16003C11.9184 1.78206 10.9912 2.0965 10.6132 2.86236L8.36072 7.42637L3.32403 8.15825C2.98747 8.20715 2.67643 8.36564 2.43904 8.60917C1.84291 9.22074 1.85542 10.1998 2.46699 10.7959L6.11158 14.3485L5.25121 19.3649C5.19372 19.7 5.24833 20.0448 5.40658 20.3459C5.80401 21.1018 6.739 21.3924 7.49495 20.995ZM19.3457 10.0485L15.6728 13.6287L16.5398 18.684L11.9999 16.2972L7.45995 18.684L8.327 13.6287L4.65411 10.0485L9.72993 9.31093L11.9999 4.71146L14.2699 9.31093L19.3457 10.0485Z" fill="currentColor"></path>
        </svg>
    )
}
export function FullStarSvg() {
    return (
        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 18.6266L7.49495 20.995C6.739 21.3924 5.80401 21.1018 5.40658 20.3459C5.24833 20.0448 5.19372 19.7 5.25121 19.3649L6.11158 14.3485L2.46699 10.7959C1.85542 10.1998 1.84291 9.22074 2.43904 8.60917C2.67643 8.36564 2.98747 8.20715 3.32403 8.15825L8.36072 7.42637L10.6132 2.86236C10.9912 2.0965 11.9184 1.78206 12.6843 2.16003C12.9892 2.31054 13.2361 2.55739 13.3866 2.86236L15.6391 7.42637L20.6758 8.15825C21.5209 8.28106 22.1065 9.06576 21.9837 9.91094C21.9348 10.2475 21.7763 10.5585 21.5328 10.7959L17.8882 14.3485L18.7486 19.3649C18.893 20.2066 18.3276 21.006 17.4859 21.1504C17.1507 21.2079 16.8059 21.1533 16.5049 20.995L11.9999 18.6266Z" fill="currentColor"></path></svg>
    )
}
export function WorkspaceSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.5048 5.67168C11.9099 5.32669 11.2374 5.10082 10.5198 5.0267C11.2076 3.81639 12.5085 3 14 3C16.2092 3 18 4.79086 18 7C18 7.99184 17.639 8.89936 17.0413 9.59835C19.9512 10.7953 22 13.6584 22 17C22 17.5523 21.5523 18 21 18H18.777C18.6179 17.2987 18.3768 16.6285 18.0645 16H19.917C19.4892 13.4497 17.4525 11.445 14.8863 11.065C14.9608 10.7218 15 10.3655 15 10C15 9.58908 14.9504 9.18974 14.857 8.80763C15.5328 8.48668 16 7.79791 16 7C16 5.89543 15.1046 5 14 5C13.4053 5 12.8711 5.25961 12.5048 5.67168ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM14 10C14 10.9918 13.639 11.8994 13.0412 12.5984C15.9512 13.7953 18 16.6584 18 20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20C2 16.6584 4.04879 13.7953 6.95875 12.5984C6.36099 11.8994 6 10.9918 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM9.99999 14C12.973 14 15.441 16.1623 15.917 19H4.08295C4.55902 16.1623 7.02699 14 9.99999 14Z" fill="currentColor"></path></svg>
    )
}

export function FilterSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.61799 6C3.87461 6 3.39111 6.78231 3.72356 7.44721L3.99996 8H20L20.2763 7.44721C20.6088 6.78231 20.1253 6 19.3819 6H4.61799ZM10.8618 17.7236C10.9465 17.893 11.1196 18 11.309 18H12.6909C12.8803 18 13.0535 17.893 13.1382 17.7236L14 16H9.99996L10.8618 17.7236ZM17 13H6.99996L5.99996 11H18L17 13Z" fill="currentColor"></path></svg>)
}
export function PencilSvg() {
    return (
        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.82034 14.4893L9.94134 16.6103L18.4303 8.12131L16.3093 6.00031H16.3073L7.82034 14.4893ZM17.7233 4.58531L19.8443 6.70731C20.6253 7.48831 20.6253 8.7543 19.8443 9.53531L10.0873 19.2933L5.13734 14.3433L14.8943 4.58531C15.2853 4.19531 15.7973 4.00031 16.3093 4.00031C16.8203 4.00031 17.3323 4.19531 17.7233 4.58531ZM5.20094 20.4097C4.49794 20.5537 3.87694 19.9327 4.02094 19.2297L4.80094 15.4207L9.00994 19.6297L5.20094 20.4097Z" fill="currentColor"></path>
        </svg>

    )
}
export function PowerUpSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z" fill="currentColor"></path><path d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z" fill="currentColor"></path></svg>
    )
}
export function DashboardSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z" fill="currentColor"></path></svg>
    )
}
export function ShareSvg() {
    return (
        <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.44777 7.61532 10.7518 8.59871 11.6649C5.31433 13.0065 3 16.233 3 20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19H5.07089C5.55612 15.6077 8.47353 13 12 13ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" fill="currentColor"></path><path d="M17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17V14Z" fill="currentColor"></path></svg>

    )
}


export function NewBoardSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="103" viewBox="0 0 186 103" fill="none">
            <rect x="64.4185" y="14.3774" width="57.8728" height="54.8552" rx="1.31379" fill="#E3E3E3" />
            <rect x="67.9799" y="27.5364" width="51.0468" height="12.574" rx="1.31379" fill="white" />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="67" y="27" width="53" height="14">
                <rect x="67.9799" y="27.5364" width="51.0468" height="12.574" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M70.651 32.5795C70.651 32.2167 70.9451 31.9226 71.3079 31.9226H80.3815C80.7443 31.9226 81.0384 32.2167 81.0384 32.5795V35.0672C81.0384 35.43 80.7443 35.7241 80.3815 35.7241H71.3079C70.9451 35.7241 70.651 35.43 70.651 35.0672V32.5795Z" fill="#E4E4E4" />
            </g>
            <rect x="67.9799" y="43.0345" width="51.0468" height="22.8087" rx="1.31379" fill="white" />
            <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="67" y="43" width="53" height="23">
                <rect x="67.9799" y="43.0345" width="51.0468" height="22.8087" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask1)">
                <rect x="70.651" y="47.4208" width="38.5819" height="3.80145" rx="0.656896" fill="#E4E4E4" />
                <rect x="70.651" y="54.1465" width="14.2456" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M68.2767 20.0055C68.2767 19.6427 68.5708 19.3486 68.9336 19.3486H90.7689C91.1317 19.3486 91.4258 19.6427 91.4258 20.0055V23.078C91.4258 23.4408 91.1317 23.7349 90.7689 23.7349H68.9336C68.5708 23.7349 68.2767 23.4408 68.2767 23.078V20.0055Z" fill="white" />
            <rect x="127.93" y="14.3774" width="57.8728" height="84.2168" rx="1.31379" fill="#E3E3E3" />
            <rect x="131.492" y="27.8287" width="51.0468" height="35.3827" rx="1.31379" fill="white" />
            <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="131" y="27" width="52" height="37">
                <rect x="131.492" y="27.8287" width="51.0468" height="35.3827" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask2)">
                <rect x="131.51" y="26.6929" width="55.3861" height="27.0612" fill="#F1F1F1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M134.163 57.1427C134.163 56.7799 134.457 56.4858 134.82 56.4858H145.674C146.037 56.4858 146.331 56.7799 146.331 57.1427V59.6304C146.331 59.9932 146.037 60.2873 145.674 60.2873H134.82C134.457 60.2873 134.163 59.9932 134.163 59.6304V57.1427Z" fill="#E4E4E4" />
            </g>
            <rect x="131.195" y="67.0129" width="51.0468" height="11.4044" rx="1.31379" fill="white" />
            <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="131" y="67" width="52" height="12">
                <rect x="131.195" y="67.0129" width="51.0468" height="11.4044" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask3)">
            </g>
            <rect x="133.866" y="70.8143" width="19.2909" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            <rect x="131.195" y="81.9263" width="51.0468" height="11.4044" rx="1.31379" fill="white" />
            <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="131" y="81" width="52" height="13">
                <rect x="131.195" y="81.9263" width="51.0468" height="11.4044" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask4)">
            </g>
            <rect x="133.866" y="85.7277" width="13.3553" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            <path fillRule="evenodd" clipRule="evenodd" d="M131.788 20.0055C131.788 19.6427 132.082 19.3486 132.445 19.3486H146.267C146.63 19.3486 146.924 19.6427 146.924 20.0055V23.078C146.924 23.4408 146.63 23.7349 146.267 23.7349H132.445C132.082 23.7349 131.788 23.4408 131.788 23.078V20.0055Z" fill="white" />
            <rect x="0.90686" y="14.3774" width="57.8728" height="85.9713" rx="1.31379" fill="#E3E3E3" />
            <rect x="4.46826" y="27.8287" width="51.0468" height="12.2816" rx="1.31379" fill="white" />
            <rect x="7.13928" y="31.9226" width="25.8202" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            <rect x="4.46826" y="43.9119" width="51.0468" height="12.2816" rx="1.31379" fill="white" />
            <rect x="7.13928" y="48.0057" width="19.5877" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            <rect x="6.84247" y="87.7747" width="13.3553" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            <rect x="4.39703" y="59.6907" width="51.0468" height="35.3827" rx="1.31379" fill="white" />
            <mask id="mask5" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="59" width="52" height="37">
                <rect x="4.39703" y="59.6907" width="51.0468" height="35.3827" rx="1.31379" fill="white" />
            </mask>
            <g mask="url(#mask5)">
                <rect x="4.41547" y="58.5548" width="55.3861" height="27.0612" fill="#F1F1F1" />
                <rect x="7.06805" y="88.3478" width="12.1681" height="3.80145" rx="0.656896" fill="#E4E4E4" />
            </g>
            <rect x="4.76501" y="19.3486" width="14.2456" height="4.38629" rx="0.656896" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M89.5882 0.101685C88.8344 0.101685 88.2234 0.709591 88.2234 1.45876V9.60063C88.2234 10.3501 88.8347 10.9577 89.5882 10.9577H97.7762C98.53 10.9577 99.141 10.3498 99.141 9.60063V1.45876C99.141 0.709269 98.5297 0.101685 97.7762 0.101685H89.5882ZM95.0468 1.51297C94.6851 1.51297 94.3919 1.80458 94.3919 2.16464V5.63796C94.3919 5.99787 94.6852 6.28962 95.0468 6.28962H97.0669C97.4285 6.28962 97.7218 5.99801 97.7218 5.63796V2.16464C97.7218 1.80473 97.4284 1.51297 97.0669 1.51297H95.0468ZM90.2976 1.51297C89.9359 1.51297 89.6427 1.80432 89.6427 2.16462V8.35199C89.6427 8.71188 89.936 9.00363 90.2976 9.00363H92.3177C92.6794 9.00363 92.9726 8.71229 92.9726 8.35199V2.16462C92.9726 1.80473 92.6793 1.51297 92.3177 1.51297H90.2976Z" fill="white" />
        </svg>
    )
}

export function DotsSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor" />
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor" />

        </svg>
    )
}

export function GenerateTemplateBtnSvg() {
    return (
        <svg role="presentation" focusable="false" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path><path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path><path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path><path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path><path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path></svg>
    )
}

export function PlusBtnAddListSvg() {
    return (
        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
    )
}

export function NotificationsSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="presentation">
            <path d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z" fill="currentColor" fillRule="evenodd">
            </path>
        </svg>
    )
}
export function SearchSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="presentation">
            <path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" fillRule="evenodd">
            </path>
        </svg>
    )
}

export function ExitBtnSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor" />
        </svg>
    )
}


export function CommentSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" version="1.0" viewBox="0 0 43.000000 36.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M95 327 c-37 -17 -53 -36 -65 -76 -11 -38 3 -92 30 -116 11 -10 20 -29 20 -42 0 -34 18 -63 39 -63 10 0 38 15 62 34 35 27 55 35 102 38 70 6 107 30 124 81 16 48 -1 102 -40 131 -24 18 -45 21 -135 24 -73 1 -116 -2 -137 -11z m262 -49 c30 -28 31 -83 1 -115 -17 -19 -32 -23 -77 -23 -50 0 -61 -4 -106 -40 l-50 -40 -3 36 c-2 26 -12 44 -33 61 -37 31 -40 85 -7 120 20 21 29 23 137 23 104 0 117 -2 138 -22z" />
            </g>
        </svg>
    )
}


export function CardIconSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="Layer_2" data-name="Layer 2" viewBox="0 0 20.41 15.8">
            <defs>

            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1" d="M18.17,0H2.24C1,0,0,1,0,2.24V13.56c0,1.24,1,2.24,2.24,2.24h15.92c1.24,0,2.24-1,2.24-2.24V2.24c0-1.24-1-2.24-2.24-2.24ZM8.15,13.95H3.36c-.77,0-1.4-.63-1.4-1.4s.63-1.4,1.4-1.4h4.79c.77,0,1.4,.63,1.4,1.4s-.63,1.4-1.4,1.4Zm8.89,0c-.77,0-1.4-.62-1.4-1.4s.62-1.4,1.4-1.4,1.4,.62,1.4,1.4-.62,1.4-1.4,1.4Zm1.03-4.74H2.33c-.2,0-.36-.16-.36-.36V2.37c0-.2,.16-.36,.36-.36h15.75c.2,0,.36,.16,.36,.36v6.48c0,.2-.16,.36-.36,.36Z" />
            </g>
        </svg>
    )
}

export function MembersSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" role="presentation" focusable="false" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0254 3C9.25613 3 7.01123 5.23858 7.01123 8C7.01123 10.7614 9.25613 13 12.0254 13C14.7946 13 17.0395 10.7614 17.0395 8C17.0395 5.23858 14.7946 3 12.0254 3ZM9.01688 8C9.01688 9.65685 10.3638 11 12.0254 11C13.6869 11 15.0338 9.65685 15.0338 8C15.0338 6.34315 13.6869 5 12.0254 5C10.3638 5 9.01688 6.34315 9.01688 8Z" fill="#44546f" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0254 11C16.7803 11 20.6765 14.6667 21.0254 19.3194C20.8721 20.2721 20.0439 21 19.0452 21H18.9741C18.9741 21 18.9741 21 18.9741 21L5.0767 21C5.07671 21 5.0767 21 5.0767 21L5.00562 21C4.00691 21 3.1787 20.2721 3.02539 19.3193C3.37428 14.6667 7.27038 11 12.0254 11ZM5.0767 19H18.9741C18.4875 15.6077 15.5618 13 12.0254 13C8.48892 13 5.56331 15.6077 5.0767 19ZM19.0451 19.9769V20.0231C19.0452 20.0154 19.0452 20.0077 19.0452 20C19.0452 19.9923 19.0452 19.9846 19.0451 19.9769Z" fill="#44546f" />
        </svg>
    )
}

export function LabelsSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 67.000000 67.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M178 513 c-134 -135 -167 -186 -168 -257 -1 -131 102 -236 231 -236 83 1 121 25 263 168 101 102 129 136 129 157 -1 22 -28 55 -134 161 -113 113 -138 134 -164 134 -25 0 -50 -20 -157 -127z m297 -273 c-119 -119 -160 -150 -213 -157 -118 -16 -218 102 -182 214 9 26 50 76 134 161 l120 122 121 -120 120 -120 -100 -100z" />
                <path d="M179 321 c-42 -43 -37 -112 10 -148 21 -16 91 -16 112 0 73 56 35 177 -56 177 -27 0 -44 -8 -66 -29z m91 -46 c6 -8 10 -22 8 -32 -5 -25 -61 -25 -66 0 -4 21 14 47 33 47 7 0 18 -7 25 -15z" />
            </g>
        </svg>
    )
}

export function CheckListSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 55.000000 51.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,51.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M26 458 c-23 -33 -24 -393 0 -426 15 -22 19 -22 224 -22 l210 0 15 24 c12 18 15 45 13 112 -3 87 -3 89 -28 89 -25 0 -25 -2 -28 -88 l-3 -87 -179 0 -180 0 0 185 0 185 163 2 c154 3 162 4 162 23 0 19 -8 20 -177 23 -173 2 -177 2 -192 -20z" />
                <path d="M365 310 c-60 -60 -114 -110 -120 -110 -5 0 -29 23 -53 50 -43 50 -77 64 -88 35 -8 -20 114 -155 141 -155 29 0 280 253 272 274 -13 33 -45 13 -152 -94z" />
            </g>
        </svg>
    )
}

export function DatesSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M254 599 c-87 -25 -181 -122 -205 -212 -26 -95 15 -233 87 -296 66 -59 111 -76 199 -76 68 0 89 4 138 29 144 70 205 250 135 396 -62 128 -219 198 -354 159z m182 -73 c191 -89 191 -341 -1 -432 -164 -78 -351 58 -332 241 6 63 26 104 71 147 71 68 174 85 262 44z" />
                <path d="M323 513 c-9 -3 -13 -35 -13 -109 l0 -104 41 -45 c27 -29 50 -45 65 -45 37 0 31 39 -11 80 -35 34 -35 35 -35 120 0 97 -10 118 -47 103z" />
            </g>
        </svg>
    )
}

export function AttachmentSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 54.000000 60.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M332 549 c-13 -5 -80 -61 -148 -125 -127 -120 -164 -172 -164 -232 0 -80 66 -156 146 -168 81 -12 113 5 245 133 117 114 136 144 95 151 -13 3 -48 -25 -110 -85 -135 -132 -150 -143 -203 -143 -38 0 -50 5 -79 34 -28 28 -34 41 -34 77 0 41 4 46 132 176 114 114 136 133 163 133 39 0 65 -27 65 -66 0 -24 -20 -49 -108 -137 -98 -98 -142 -127 -142 -95 0 7 46 58 101 114 71 71 100 107 96 118 -13 33 -44 13 -149 -92 -85 -85 -108 -114 -108 -135 0 -39 41 -77 82 -77 28 0 49 16 160 128 127 127 128 128 128 174 0 89 -87 150 -168 117z" />
            </g>
        </svg>
    )
}

export function EyeSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15px" height="15px" viewBox="0 0 58.000000 44.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,44.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M185 416 c-96 -44 -155 -116 -155 -189 0 -40 45 -115 88 -146 114 -81 230 -81 344 0 43 31 88 106 88 146 0 104 -133 213 -260 213 -37 0 -72 -8 -105 -24z m205 -53 c65 -34 113 -91 113 -133 0 -69 -120 -160 -212 -160 -115 1 -239 111 -210 187 16 42 58 83 114 109 68 33 129 31 195 -3z" />
                <path d="M216 299 c-59 -69 -15 -169 74 -169 91 0 135 106 71 171 -24 23 -38 29 -74 29 -38 0 -49 -5 -71 -31z m102 -25 c24 -17 30 -62 10 -82 -37 -37 -113 12 -89 57 10 18 37 40 51 41 3 0 16 -7 28 -16z" />
            </g>
        </svg>
    )
}

export function SuggestionSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 49.000000 55.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,55.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M116 426 c-7 -44 -8 -45 -52 -52 -24 -3 -44 -10 -44 -14 0 -4 20 -11 44 -14 44 -7 45 -8 52 -52 3 -24 10 -44 14 -44 4 0 11 20 14 44 7 44 8 45 52 52 24 3 44 10 44 14 0 4 -20 11 -44 14 -44 7 -45 8 -52 52 -3 24 -10 44 -14 44 -4 0 -11 -20 -14 -44z" />
                <path d="M365 311 c-5 -22 -14 -31 -36 -36 -16 -4 -29 -10 -29 -15 0 -5 13 -11 29 -15 22 -5 31 -14 36 -36 4 -16 10 -29 15 -29 5 0 11 13 15 29 5 22 14 31 36 36 16 4 29 10 29 15 0 5 -13 11 -29 15 -22 5 -31 14 -36 36 -4 16 -10 29 -15 29 -5 0 -11 -13 -15 -29z" />
                <path d="M215 161 c-5 -22 -14 -31 -36 -36 -16 -4 -29 -10 -29 -15 0 -5 13 -11 29 -15 22 -5 31 -14 36 -36 4 -16 10 -29 15 -29 5 0 11 13 15 29 5 22 14 31 36 36 16 4 29 10 29 15 0 5 -13 11 -29 15 -22 5 -31 14 -36 36 -4 16 -10 29 -15 29 -5 0 -11 -13 -15 -29z" />

            </g>
        </svg>
    )
}

export function BackBtnSvg() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 11.2929L14.364 4.22185C14.7545 3.83132 15.3876 3.83132 15.7782 4.22185C16.1687 4.61237 16.1687 5.24554 15.7782 5.63606L9.41421 12L15.7782 18.364C16.1687 18.7545 16.1687 19.3877 15.7782 19.7782C15.3877 20.1687 14.7545 20.1687 14.364 19.7782L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="currentColor"></path>
        </svg>
    )
}

export function CheckBoxSmallSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" version="1.0" viewBox="0 0 39.000000 39.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,39.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M50 340 c-22 -14 -22 -286 0 -300 19 -12 260 -13 279 -1 18 11 26 119 11 141 -16 23 -30 -5 -30 -62 l0 -48 -120 0 -120 0 0 120 0 120 105 0 c98 0 105 1 105 20 0 19 -7 20 -107 20 -60 0 -115 -5 -123 -10z" />
                <path d="M270 235 c-41 -41 -80 -75 -86 -75 -6 0 -24 16 -38 35 -30 39 -46 45 -46 17 0 -10 20 -38 45 -62 l44 -43 86 83 c73 72 104 120 77 120 -4 0 -41 -34 -82 -75z" />
            </g>
        </svg>
    )
}

export function ClockSvg() {
    return (
        <svg role="presentation" width="16" height="16" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"></path>
        </svg>
    )
}