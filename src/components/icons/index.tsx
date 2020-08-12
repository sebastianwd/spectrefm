import React from 'react'
import { SvgIcon } from '@material-ui/core'

interface Props {
  style?: React.CSSProperties | undefined
}

export const MusicFolderIcon: React.FC<Props> = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 28" style={{ marginBottom: 3 }}>
    <path d="M32.5604 1.39825C32.3622 0.62825 31.3994 0 30.4189 0H4.95126C3.96902 0 3.00624 0.62825 2.80979 1.39825L2.45405 3.5H32.9144L32.5604 1.39825ZM34.3426 5.25H1.02581C0.882859 5.25009 0.741504 5.27971 0.610799 5.33695C0.480094 5.3942 0.362922 5.4778 0.266788 5.58241C0.170653 5.68703 0.0976764 5.81034 0.0525317 5.94446C0.00738711 6.07857 -0.00892994 6.22054 0.00462579 6.36125L1.63817 26.782C1.67071 27.1153 1.82757 27.4246 2.07819 27.6498C2.32881 27.875 2.65523 27.9998 2.99385 28H32.3746C32.7132 27.9998 33.0396 27.875 33.2902 27.6498C33.5408 27.4246 33.6977 27.1153 33.7303 26.782L35.3638 6.36125C35.3774 6.22054 35.361 6.07857 35.3159 5.94446C35.2707 5.81034 35.1978 5.68703 35.1016 5.58241C35.0055 5.4778 34.8883 5.3942 34.7576 5.33695C34.6269 5.27971 34.4856 5.25009 34.3426 5.25ZM21.1221 18.4118C20.8955 18.8755 20.6655 18.9 20.7646 18.4118C21.023 17.15 20.8478 14.441 18.9187 14.14V19.9045C18.9187 21.084 18.3682 22.113 16.9081 22.5785C15.4888 23.0265 13.9012 22.5592 13.5313 21.553C13.1597 20.545 13.9933 19.32 15.3932 18.816C16.1754 18.5342 17.0816 18.4608 17.6922 18.6935V10.5H18.9204C18.9187 13.3577 23.9078 12.7313 21.1221 18.4118Z" />
  </SvgIcon>
)

export const HomeIcon: React.FC<Props> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M3 10v11h6v-7h6v7h6v-11L12,3z" />
  </SvgIcon>
)
