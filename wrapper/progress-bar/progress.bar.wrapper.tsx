'use client'
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';

const ProgressBarWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressProvider
                height='3px'
                color='#60a5fa'
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )
}

export default ProgressBarWrapper