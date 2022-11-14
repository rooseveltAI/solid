import { background, color, extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    body: "GeneralSans, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
    heading: "Switzer, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
    fontDisplay: 'optional',
    webkitFontSmoothing: 'antialiased'
  },

  colors: {
    primary: {
      '50': '#2475FB',
      '100': '#0561FA',
      '200': '#A294F5',
      '300': '#7E6AF1',
      '400': '#5A40ED',
      '500': '#3516E9',
      '600': '#2B11BB',
      '700': '#200D8C',
      '800': '#15095D',
      '900': '#0B042F'
    },
    secondary: {
      '50': '#141414',
      '100': '#7A7E80',
      '200': '#B4B6B8',
      '300': '#FA6161',
      '400': '#F83535',
      '500': '#F60909',
      '600': '#C50707',
      '700': '#940505',
      '800': '#630303',
      '900': '#310202'
    }
  },

  styles: {
    global: {
      html: {
        webkitFontSmoothing: 'antialiased'
      },
      body: {
        background: '#000000',
        color: '#FFFFFF',
        transition: 'all 0.2s ease-out'
      },

      button: {
        _focus: {
          boxShadow: 'none !important'
        },
        _hover: {
          opacity: 0.9
        }
      }
    }
  },

  components: {
    Text: {
      baseStyle: {
        color: '#fff',
        opacity: '98%',
        fontWeight: 400
      }
    },

    Link: {
      baseStyle: {
        borderBottom: '1px solid',
        _hover: {
          textDecoration: 'none',
          transform: 'scale(1.01)'
        },
        _focus: {
          boxShadow: 'none !important'
        }
      }
    },

    Button: {
      sizes: {
        lg: {
          h: 12
        }
      },

      variants: {
        primary: {
          backgroundColor: '#0561FA',
          color: '#FFFFFF',
          rounded: '980px',
          transition: '0.4s ease-out',
          // flexGrow: '1',
          // flexShrink: '0',
          _hover: {
            // transform: 'scale(1.01)',

            _disabled: {
              backgroundColor: 'rgb(0 0 0 / 90%)'
            }
          }
        },

        'primary-outline': {
          border: '1px solid rgb(0 0 0)',
          backgroundColor: 'transparent',
          rounded: '0px',
          _focus: {
            border: '1px solid #FFEA3C'
          }
        },

        accent: {
          background: 'rgba(255, 255, 255, 8%)',
          color: '#fff',
          rounded: 'full',
          transition: '0.4s ease-in-out',

          _hover: {
            transform: 'scale(1.01)',
            background: 'rgba(255, 255, 255, 24%)',
            color: '#fff'
          }
        },

        secondary: {
          background: 'rgba(255, 255, 255, 12%)',
          color: '#fff',
          rounded: 'full',
          transition: '0.2s ease-out',
          // flexGrow: '1',
          // flexShrink: '0',
          backdropFilter: 'blur(12px)',
          _hover: {
            opacity: '0.9',
            color: '#fff'
          }
        }
      }
    },

    Modal: {
      baseStyle: {
        dialog: {
          mx: 5,
          backdropFilter: 'blur(22px)'
        },
        header: {
          // borderBottom: '1px solid rgb(0 0 0 / 24%)'
        }
      }
    },

    Input: {
      sizes: {
        lg: {
          field: {
            fontWeight: 700,
            fontSize: '2xl',
            py: 6
          }
        }
      },

      variants: {
        outline: {
          field: {
            rounded: '13px',
            border: '1px solid',
            borderColor: 'rgba(255, 255, 255, 12%)',
            color: '#fff',

            _hover: {
              borderColor: 'rgba(255, 255, 255, 16%)'
            },

            _placeholder: {
              color: 'rgba(255, 255, 255, 48%)'
            },

            _focus: {
              borderColor: 'rgba(255, 255, 255, 24%)',
              outline: 'none',
              boxShadow: 'none'
            }
          }
        },

        solid: {
          field: {
            rounded: '0px',
            backgroundColor: 'rgba(255, 255, 255, 3%)',
            borderTop: '1px solid',
            borderColor: 'rgba(255, 255, 255, 8%)',

            _hover: {
              backgroundColor: 'rgba(255, 255, 255, 4%)'
            },

            _placeholder: {
              color: 'rgba(255, 255, 255, 48%)'
            }
          }
        },

        flushed: {
          field: {
            borderBottom: '1px solid',
            borderColor: 'rgb(255 255 255 / 12%)',

            _hover: {
              borderColor: 'rgb(255 255 255 / 32%)'
            },

            _placeholder: {
              color: 'secondary.100'
            },

            _focus: {
              borderColor: 'rgb(255 255 255 / 100%)',
              outline: 'none',
              boxShadow: 'none'
            }
          }
        }
      }
    },

    SelectMenu: {
      baseStyle: {
        w: '100%',
        cursor: 'pointer'
      },

      sizes: {
        md: {
          fontWeight: 600,
          fontSize: 'md'
        },

        lg: {
          fontWeight: 700,
          fontSize: '2xl'
        }
      },

      variants: {
        outline: {
          rounded: '0px',
          border: '1px solid',
          borderColor: 'rgb(0 0 0 / 12%)',
          color: 'black',
          py: 2,
          px: 4,

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          }
        },

        flushed: {
          borderBottom: '1px solid rgb(0 0 0 / 24%)',
          pt: 3,
          pb: 2,

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          }
        }
      }
    },

    FormLabel: {
      variants: {
        outlined: {
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: '600',
          color: 'rgb(0 0 0 / 72%)'
        },

        flushed: {}
      },

      defaultProps: {
        variant: 'outlined'
      }
    },

    Tabs: {
      variants: {
        line: {
          tablist: {
            borderBottom: '2px solid',
            borderColor: 'rgba(255, 255, 255, 0.24)'
          },

          tab: {
            color: 'rgb(255 255 255 / 48%)',
            borderBottom: '1.5px solid',
            borderColor: 'transparent',

            _selected: {
              color: 'rgb(255 255 255 / 100%)',
              borderColor: 'primary.100',
              fontWeight: '600'
            },
            _active: {
              bg: 'transparent'
            },
            _focus: {
              boxShadow: 'none'
            }
          }
        }
      }
    },

    Textarea: {
      variants: {
        outline: {
          rounded: '0px',
          border: '1px solid',
          borderColor: 'rgb(0 0 0 / 26%)',
          color: 'black',

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          },

          _placeholder: {
            color: 'rgb(0 0 0 / 36%)'
          },

          _focus: {
            borderColor: 'rgb(0 0 0 / 60%)',
            outline: 'none',
            boxShadow: 'none'
          }
        },

        flushed: {
          borderBottom: '1px solid',
          borderColor: 'rgb(255 255 255 / 12%)',

          _hover: {
            borderColor: 'rgb(255 255 255 / 32%)'
          },

          _placeholder: {
            color: 'secondary.100'
          },

          _focus: {
            borderColor: 'rgb(255 255 255 / 100%)',
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    },

    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#212121',
            borderColor: '#212121',

            _hover: {
              bg: '#212121',
              borderColor: '#212121'
            }
          }
        },
        label: {
          fontWeight: '500',
          ml: 4
        }
      },

      md: {
        label: { fontSize: 'sm' }
      },

      lg: {
        label: { fontSize: 'md' }
      }
    },

    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#000000',
            borderColor: '#000000',

            _hover: {
              bg: '#000000',
              borderColor: '#000000'
            }
          }
        },
        label: {
          fontWeight: '500',
          ml: 4
        }
      },

      md: {
        label: { fontSize: 'sm' }
      },

      lg: {
        label: { fontSize: 'md' }
      }
    }
  }
})
