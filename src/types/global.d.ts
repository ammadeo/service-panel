type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never })
