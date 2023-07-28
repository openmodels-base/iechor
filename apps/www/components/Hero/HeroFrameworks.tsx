import React from 'react'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import Telemetry from '~/lib/telemetry'
import { useTelemetryProps } from 'common/hooks/useTelemetryProps'
import { useRouter } from 'next/router'
import { useBreakpoint } from 'common'

const frameworks = [
  {
    name: 'Next.js',
    icon: 'M42.3148 48.6796C38.9009 50.9525 34.8014 52.2771 30.3924 52.2771C18.4957 52.2771 8.85156 42.6329 8.85156 30.7362C8.85156 18.8395 18.4957 9.19531 30.3924 9.19531C42.2891 9.19531 51.9333 18.8395 51.9333 30.7362C51.9333 37.1564 49.1245 42.9207 44.6688 46.8671L39.5552 40.2803V21.8278H36.584V36.4531L25.2299 21.8278H21.4808V39.6473H24.4801V25.6368L42.3148 48.6796Z',
    docs: '/docs/guides/getting-started/quickstarts/nextjs',
    gaEvent: 'www_hp_hero_frameworks_nextjs',
  },
  {
    name: 'React',
    icon: 'M45.74 23.6983C45.2739 23.5379 44.7909 23.3861 44.2937 23.2426C44.3754 22.909 44.4504 22.5798 44.5171 22.2561C45.6119 16.9418 44.8961 12.6605 42.4518 11.2509C40.1079 9.89927 36.2748 11.3085 32.4035 14.6776C32.0313 15.0016 31.6579 15.3446 31.2848 15.704C31.0362 15.4662 30.7879 15.2364 30.5403 15.0165C26.4831 11.4141 22.4164 9.89599 19.9744 11.3097C17.6329 12.6652 16.9394 16.69 17.9249 21.7265C18.0201 22.2129 18.1313 22.7097 18.2571 23.2148C17.6816 23.3782 17.1259 23.5524 16.5943 23.7377C11.8376 25.3961 8.7998 27.9952 8.7998 30.6911C8.7998 33.4755 12.0609 36.2683 17.0153 37.9617C17.4063 38.0953 17.812 38.2217 18.2301 38.3416C18.0944 38.8879 17.9763 39.4232 17.8773 39.9454C16.9376 44.8944 17.6714 48.8242 20.0068 50.1711C22.4189 51.5622 26.4673 50.1324 30.4093 46.6865C30.7209 46.4141 31.0336 46.1253 31.3469 45.8225C31.7529 46.2135 32.1582 46.5835 32.5615 46.9306C36.3798 50.2164 40.151 51.5432 42.4842 50.1925C44.894 48.7975 45.6772 44.576 44.6604 39.4399C44.5828 39.0476 44.4924 38.6469 44.3909 38.239C44.6752 38.155 44.9543 38.0682 45.2265 37.978C50.3771 36.2715 53.7282 33.5127 53.7282 30.6911C53.7282 27.9854 50.5924 25.3688 45.74 23.6983ZM44.6228 36.1561C44.3772 36.2375 44.1251 36.3161 43.8682 36.3923C43.2996 34.5922 42.5322 32.6781 41.5931 30.7005C42.4893 28.7699 43.227 26.8803 43.7797 25.0919C44.2393 25.2249 44.6854 25.3651 45.1152 25.5132C49.2728 26.9444 51.8089 29.0605 51.8089 30.6911C51.8089 32.4279 49.07 34.6826 44.6228 36.1561ZM42.7776 39.8126C43.2272 42.0837 43.2914 44.1371 42.9936 45.7423C42.726 47.1847 42.1878 48.1463 41.5225 48.5315C40.1066 49.351 37.0787 48.2857 33.8132 45.4757C33.4388 45.1535 33.0618 44.8096 32.6835 44.4455C33.9495 43.061 35.2147 41.4514 36.4495 39.6638C38.6215 39.4711 40.6735 39.156 42.5344 38.7258C42.626 39.0955 42.7074 39.4581 42.7776 39.8126ZM24.1169 48.3898C22.7336 48.8784 21.6318 48.8924 20.9658 48.5084C19.5486 47.691 18.9594 44.5358 19.7631 40.3033C19.8551 39.8186 19.9647 39.3207 20.091 38.8118C21.9314 39.2187 23.9684 39.5116 26.1456 39.6881C27.3887 41.4373 28.6905 43.0452 30.0024 44.453C29.7157 44.7297 29.4302 44.9931 29.1463 45.2413C27.4032 46.7651 25.6564 47.8461 24.1169 48.3898ZM17.6361 36.1455C15.4453 35.3967 13.6361 34.4235 12.396 33.3616C11.2817 32.4073 10.7191 31.4599 10.7191 30.6911C10.7191 29.0551 13.1581 26.9684 17.226 25.5501C17.7196 25.378 18.2363 25.2158 18.7725 25.0635C19.3347 26.8923 20.0722 28.8043 20.9623 30.7378C20.0607 32.7 19.3128 34.6425 18.745 36.4927C18.3628 36.3829 17.9924 36.2672 17.6361 36.1455ZM19.8085 21.3579C18.9642 17.0428 19.5249 13.7876 20.936 12.9708C22.4391 12.1006 25.7628 13.3413 29.2659 16.4518C29.4898 16.6506 29.7146 16.8587 29.9401 17.074C28.6347 18.4756 27.3448 20.0714 26.1127 21.8103C23.9997 22.0061 21.977 22.3208 20.1174 22.742C20.0004 22.2717 19.8969 21.8097 19.8085 21.3579ZM39.1886 26.1433C38.744 25.3754 38.2876 24.6257 37.8223 23.8964C39.2558 24.0777 40.6293 24.3182 41.9191 24.6126C41.5318 25.8536 41.0492 27.1511 40.4811 28.4813C40.0735 27.7076 39.6425 26.9275 39.1886 26.1433ZM31.2854 18.4456C32.1707 19.4047 33.0573 20.4756 33.9293 21.6374C33.0506 21.5959 32.161 21.5743 31.264 21.5743C30.3755 21.5743 29.4925 21.5954 28.6192 21.6362C29.4921 20.4852 30.3863 19.4158 31.2854 18.4456ZM23.3317 26.1566C22.8876 26.9267 22.4645 27.7025 22.0634 28.4799C21.5045 27.1543 21.0263 25.8509 20.6357 24.5923C21.9176 24.3054 23.2846 24.0709 24.7089 23.8931C24.2371 24.6291 23.7769 25.3843 23.3317 26.1564V26.1566ZM24.75 37.626C23.2783 37.4618 21.8908 37.2394 20.6093 36.9604C21.0061 35.6793 21.4948 34.3481 22.0655 32.994C22.4677 33.7707 22.8925 34.5469 23.3393 35.3187H23.3393C23.7945 36.1049 24.266 36.875 24.75 37.626ZM31.3385 43.0719C30.4289 42.0904 29.5215 41.0047 28.6353 39.8368C29.4956 39.8706 30.3726 39.8879 31.264 39.8879C32.1798 39.8879 33.085 39.8672 33.9761 39.8276C33.1012 41.0164 32.2178 42.1038 31.3385 43.0719ZM40.4994 32.9249C41.0999 34.2937 41.6061 35.618 42.0081 36.8772C40.7054 37.1744 39.2989 37.4138 37.8171 37.5916C38.2835 36.8525 38.7439 36.0899 39.1963 35.3055C39.6539 34.5118 40.0885 33.717 40.4994 32.9249ZM37.5337 34.3466C36.8314 35.5643 36.1104 36.7268 35.3784 37.8241C34.0452 37.9194 32.6678 37.9685 31.264 37.9685C29.8659 37.9685 28.5058 37.9251 27.1962 37.8401C26.4347 36.7284 25.698 35.5625 25.0002 34.3571H25.0004C24.3044 33.155 23.6638 31.9427 23.0834 30.7372C23.6636 29.5289 24.3025 28.3152 24.9945 27.1152L24.9944 27.1155C25.6882 25.9123 26.4184 24.7521 27.1729 23.6473C28.509 23.5463 29.8792 23.4936 31.2639 23.4936H31.264C32.655 23.4936 34.0269 23.5467 35.3626 23.6486C36.1056 24.7453 36.8308 25.9017 37.5274 27.1051C38.2319 28.3219 38.879 29.5275 39.4642 30.7099C38.8808 31.9126 38.2351 33.1303 37.5337 34.3466ZM41.4931 12.9137C42.9976 13.7813 43.5826 17.2804 42.6374 21.8688C42.5771 22.1615 42.5092 22.4597 42.4354 22.762C40.5715 22.3319 38.5474 22.0118 36.4282 21.813C35.1937 20.055 33.9143 18.4567 32.6302 17.0731C32.9755 16.741 33.3202 16.4243 33.6636 16.1254C36.9805 13.2388 40.0806 12.0991 41.4931 12.9137ZM31.264 26.6791C33.4797 26.6791 35.276 28.4753 35.276 30.6911C35.276 32.9068 33.4797 34.703 31.264 34.703C29.0483 34.703 27.252 32.9068 27.252 30.6911C27.252 28.4753 29.0483 26.6791 31.264 26.6791Z',
    docs: '/docs/guides/getting-started/quickstarts/reactjs',
    gaEvent: 'www_hp_hero_frameworks_react',
  },
  {
    name: 'Nuxt',
    icon: 'M32.5784 45.4741H50.2199C50.7802 45.4741 51.3307 45.3325 51.8159 45.0634C52.3012 44.7943 52.7041 44.4072 52.9842 43.9409C53.2642 43.4748 53.4115 42.946 53.4113 42.4078C53.4111 41.8696 53.2633 41.3409 52.9828 40.875L41.1352 21.164C40.8552 20.6979 40.4524 20.3109 39.9672 20.0418C39.4821 19.7727 38.9317 19.631 38.3715 19.631C37.8113 19.631 37.261 19.7727 36.7758 20.0418C36.2906 20.3109 35.8878 20.6979 35.6078 21.164L32.5784 26.2073L26.6555 16.3452C26.3753 15.8792 25.9723 15.4922 25.487 15.2232C25.0017 14.9541 24.4513 14.8125 23.8909 14.8125C23.3306 14.8125 22.7802 14.9541 22.2949 15.2232C21.8096 15.4922 21.4066 15.8792 21.1263 16.3452L6.38358 40.875C6.10311 41.3409 5.95532 41.8696 5.95508 42.4078C5.95483 42.946 6.10214 43.4748 6.38219 43.9409C6.66224 44.4072 7.06515 44.7943 7.5504 45.0634C8.03564 45.3325 8.58612 45.4741 9.14645 45.4741H20.2203C24.6079 45.4741 27.8436 43.6229 30.07 40.0113L38.3706 26.2073L47.0599 40.6619H35.4754L32.5784 45.4741ZM20.0398 40.657L12.3116 40.6553L23.8961 21.3836L29.6763 31.0195L25.8062 37.4599C24.3276 39.8032 22.6479 40.657 20.0398 40.657Z',
    docs: '/docs/guides/getting-started/quickstarts/nuxtjs',
    gaEvent: 'www_hp_hero_frameworks_nuxt',
  },
  {
    name: 'Flutter',
    icon: `M46.5067 10.3828L34.3509 10.3962L14.75 29.9971L20.7974 36.0519L26.1125 30.7666L46.5067 10.3828Z M34.6996 28.4653C34.5272 28.4573 34.3493 28.4491 34.2378 28.5965L23.7856 39.0471L29.7894 45.0142L29.7825 45.021L34.079 49.3212C34.1072 49.3462 34.1352 49.3741 34.1637 49.4026C34.2813 49.5201 34.4074 49.6462 34.5895 49.6055C36.5743 49.601 38.5591 49.6017 40.544 49.6025C42.529 49.6032 44.5142 49.604 46.4998 49.5995L35.9333 39.0234L46.4963 28.467L34.906 28.464C34.8415 28.4719 34.7711 28.4686 34.6996 28.4653Z`,
    docs: '/docs/guides/getting-started/quickstarts/flutter',
    gaEvent: 'www_hp_hero_frameworks_flutter',
  },
  {
    name: 'Android Kotlin',
    icon: '/images/logos/frameworks/kotlin.svg',
    docs: '/docs/guides/getting-started/quickstarts/kotlin',
    gaEvent: 'www_hp_hero_frameworks_kotlin',
  },
  {
    name: 'Svelte',
    icon: 'M28.8421 13.5737C33.6246 10.5267 40.239 11.9474 43.588 16.7408H43.5882C45.1937 18.9881 45.826 21.7874 45.3423 24.5066C45.1104 25.792 44.6203 27.017 43.9015 28.1076C44.9502 30.1077 45.3021 32.4004 44.9015 34.6229C44.4229 37.291 42.8426 39.634 40.5482 41.0772L32.1489 46.4304C27.3671 49.4774 20.7527 48.0572 17.4029 43.2634C15.7977 41.016 15.1654 38.2167 15.6488 35.4975C15.8809 34.2121 16.3713 32.987 17.0902 31.8964C16.041 29.8965 15.6888 27.6038 16.0895 25.3813C16.5683 22.7133 18.1485 20.3704 20.4428 18.927L28.8421 13.5737ZM20.8577 41.0643C22.4527 43.3635 25.3126 44.4236 28.0207 43.7194H28.0206C28.6247 43.558 29.2004 43.305 29.7278 42.9693L38.1291 37.6151C39.5092 36.7467 40.4598 35.3374 40.7479 33.7325C41.0388 32.0968 40.6583 30.4128 39.6925 29.061C38.0976 26.7618 35.2377 25.7017 32.5296 26.4059C31.926 26.5672 31.3506 26.8201 30.8237 27.1557L27.618 29.1987C27.4585 29.3002 27.2845 29.3766 27.1019 29.4255C26.286 29.6371 25.4247 29.3173 24.9444 28.6246C24.6537 28.2169 24.5393 27.7094 24.627 27.2164C24.7138 26.7331 25.0001 26.3087 25.4157 26.0471L33.8177 20.6927C33.9771 20.5912 34.1512 20.5147 34.3338 20.4659C35.1494 20.2542 36.0104 20.5738 36.4904 21.2664C36.7471 21.6298 36.8671 22.0722 36.8293 22.5155L36.8005 22.8272L37.1128 22.922C38.294 23.2783 39.4056 23.8339 40.3996 24.5648L40.8298 24.8804L40.988 24.398C41.0728 24.1413 41.1399 23.8792 41.1888 23.6134C41.4796 21.9776 41.0992 20.2937 40.1334 18.9419C38.5385 16.6427 35.6786 15.5826 32.9705 16.2868C32.3664 16.4481 31.7907 16.7011 31.2633 17.0369L22.862 22.3915C21.4818 23.2594 20.5311 24.6687 20.2432 26.2735C19.9523 27.9092 20.3328 29.5932 21.2987 30.945C22.8935 33.2442 25.7534 34.3043 28.4616 33.6001C29.0651 33.4388 29.6405 33.1861 30.1677 32.8509L33.3738 30.8071C33.533 30.7057 33.7068 30.6293 33.8892 30.5804C34.7051 30.3689 35.5664 30.6886 36.0467 31.3814C36.3372 31.7891 36.4518 32.2964 36.3648 32.7894C36.2775 33.2728 35.991 33.6973 35.5754 33.959L27.1734 39.3132C27.014 39.4147 26.8399 39.4912 26.6573 39.54C25.8417 39.7517 24.9807 39.4321 24.5007 38.7396C24.2437 38.3763 24.1237 37.9337 24.1618 37.4903L24.1906 37.1787L23.8783 37.084C22.6973 36.7276 21.5858 36.1723 20.5917 35.4419L20.1613 35.1257L20.0031 35.6082C19.9181 35.8648 19.851 36.1269 19.8023 36.3928C19.5115 38.0285 19.8919 39.7125 20.8577 41.0643Z',
    docs: '/docs/guides/getting-started/quickstarts/sveltekit',
    gaEvent: 'www_hp_hero_frameworks_svelte',
  },
  {
    name: 'Python',
    icon: 'M25.8507 12.3604C27.1186 12.136 28.5596 12.0073 30.0686 12.0003C31.5775 11.9933 33.1508 12.108 34.6671 12.3604C37.0624 12.7596 39.0804 14.5565 39.0804 16.9486V25.3535C39.0804 27.8182 37.1213 29.8389 34.6671 29.8389H25.8507C22.8573 29.8389 20.3366 32.4087 20.3366 35.3221V39.3548H17.3017C14.7365 39.3548 13.2381 37.4929 12.6106 34.8798C11.7643 31.3692 11.8002 29.2712 12.6106 25.909C13.3132 22.9758 15.5595 21.434 18.1247 21.434H21.4373H30.264V20.3126H21.4373V16.9486C21.4373 14.4014 22.1155 13.0203 25.8507 12.3604ZM26.9514 16.3931C26.9514 15.4626 26.2069 14.7059 25.2952 14.7059C24.3801 14.7059 23.6389 15.4626 23.6389 16.3931C23.6389 17.3202 24.3801 18.0699 25.2952 18.0699C26.2069 18.0699 26.9514 17.3202 26.9514 16.3931ZM40.1814 25.3549V21.4353H43.494C46.0625 21.4353 47.2734 23.3566 47.9073 25.9104C48.7897 29.4573 48.8289 32.1162 47.9073 34.8811C47.0152 37.5668 46.0593 39.3562 43.494 39.3562H39.0807H30.2642V40.4775H39.0807V43.8415C39.0807 46.3887 36.8895 47.6835 34.6673 48.3269C31.3243 49.2969 28.6449 49.1485 25.8509 48.3269C23.5176 47.6406 21.4375 46.2336 21.4375 43.8415V35.4366C21.4375 33.0182 23.4359 30.9513 25.8509 30.9513H34.6673C37.6051 30.9513 40.1814 28.3936 40.1814 25.3549ZM36.8791 44.3971C36.8791 43.4699 36.1378 42.7202 35.2228 42.7202C34.3111 42.7202 33.5665 43.4699 33.5665 44.3971C33.5665 45.3275 34.3111 46.0842 35.2228 46.0842C36.1378 46.0842 36.8791 45.3275 36.8791 44.3971Z',
    docs: '/docs/reference/python/introduction',
    gaEvent: 'www_hp_hero_frameworks_python',
  },
  {
    name: 'Vue',
    icon: 'M43.0532 13.4531H50.1147L30.2756 47.8158L10.4365 13.4531H17.4978L30.2755 35.5845L43.0532 13.4531ZM42.1764 13.4531L30.2755 34.0659L18.3746 13.4531L25.6939 13.4531L30.2756 21.3888L34.8572 13.4531L42.1764 13.4531Z',
    docs: '/docs/guides/getting-started/quickstarts/vue',
    gaEvent: 'www_hp_hero_frameworks_vue',
  },
]

const HeroFrameworks = ({ className }: { className?: string }) => {
  const router = useRouter()
  const telemetryProps = useTelemetryProps()
  const isXs = useBreakpoint(640)

  const sendTelemetryEvent = async (gaEvent: string) => {
    return await Telemetry.sendEvent(
      {
        action: gaEvent,
        category: 'link',
        label: '',
      },
      telemetryProps,
      router
    )
  }

  return (
    <div className={['flex text-center flex-col items-center', className].join(' ')}>
      <small className="small !text-scale-1100">Works seamlessly with 20+ frameworks</small>
      <div className="w-full sm:max-w-lg mt-4 md:mt-3 lg:ml-0">
        <div className="flex flex-wrap items-center justify-center gap-1 xs:gap-2 sm:flex-nowrap">
          {frameworks.map((framework) => (
            <Link href={framework.docs} key={framework.name}>
              <a
                key={framework.name}
                className="m-0"
                data-tip={framework.name}
                onClick={() => sendTelemetryEvent(framework.gaEvent)}
              >
                <svg
                  width={isXs ? 35 : 45}
                  height={isXs ? 35 : 45}
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={framework.icon} fill="#7E7E7E" />
                </svg>
              </a>
            </Link>
          ))}
          <ReactTooltip
            effect={'solid'}
            place="bottom"
            backgroundColor="#2e2e2e"
            textColor="white"
            className="!py-2 !px-4"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroFrameworks