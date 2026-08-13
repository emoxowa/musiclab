import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function H1({ className, ...props }: React.ComponentProps<'h1'>) {
  return <h1 className={cn('text-4xl font-medium', className)} {...props} />
}

export { H1 }
