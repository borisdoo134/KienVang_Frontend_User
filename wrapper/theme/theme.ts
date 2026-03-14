'use client';
import { createTheme } from '@mui/material/styles';
import { Quicksand, Archivo, Inter } from 'next/font/google';

export const quicksand = Quicksand({
    subsets: ['latin', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const archivo = Archivo({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
});

export const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF', 
            paper: '#ffffff'    // (Tùy chọn) Màu nền cho các component nổi như Card, Dialog, Menu...
        },
        secondary: {
            main: '#f8f9fa'
        },
        info: {
            main: '#dab2ff'
        },
        warning: {
            main: '#00c951'
        },
        mode: 'light'
    },
    typography: {
        fontFamily: quicksand.style.fontFamily
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: ({ ownerState }) =>
                    ownerState.color === 'primary'
                        ? {
                            backgroundColor: '#FFC107',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#AC7511',
                            }
                        }
                        : (ownerState.color === 'warning') ? {
                            color: 'black'
                        } : {},
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#252525',
                },
            },
        },
    },
});

export default theme;
