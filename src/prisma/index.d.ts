
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model MaintenanceItem
 * 
 */
export type MaintenanceItem = $Result.DefaultSelection<Prisma.$MaintenanceItemPayload>
/**
 * Model MaintenanceEntry
 * 
 */
export type MaintenanceEntry = $Result.DefaultSelection<Prisma.$MaintenanceEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceItem`: Exposes CRUD operations for the **MaintenanceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceItems
    * const maintenanceItems = await prisma.maintenanceItem.findMany()
    * ```
    */
  get maintenanceItem(): Prisma.MaintenanceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceEntry`: Exposes CRUD operations for the **MaintenanceEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceEntries
    * const maintenanceEntries = await prisma.maintenanceEntry.findMany()
    * ```
    */
  get maintenanceEntry(): Prisma.MaintenanceEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    MaintenanceItem: 'MaintenanceItem',
    MaintenanceEntry: 'MaintenanceEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "maintenanceItem" | "maintenanceEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceItem: {
        payload: Prisma.$MaintenanceItemPayload<ExtArgs>
        fields: Prisma.MaintenanceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          findMany: {
            args: Prisma.MaintenanceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>[]
          }
          create: {
            args: Prisma.MaintenanceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          createMany: {
            args: Prisma.MaintenanceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          update: {
            args: Prisma.MaintenanceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceItemPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceItem>
          }
          groupBy: {
            args: Prisma.MaintenanceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceItemCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceItemCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceEntry: {
        payload: Prisma.$MaintenanceEntryPayload<ExtArgs>
        fields: Prisma.MaintenanceEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          findMany: {
            args: Prisma.MaintenanceEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>[]
          }
          create: {
            args: Prisma.MaintenanceEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          createMany: {
            args: Prisma.MaintenanceEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          update: {
            args: Prisma.MaintenanceEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceEntryPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceEntry>
          }
          groupBy: {
            args: Prisma.MaintenanceEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    maintenanceItem?: MaintenanceItemOmit
    maintenanceEntry?: MaintenanceEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Vehicle: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | UserCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    MaintenanceItem: number
    MaintenanceEntry: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MaintenanceItem?: boolean | VehicleCountOutputTypeCountMaintenanceItemArgs
    MaintenanceEntry?: boolean | VehicleCountOutputTypeCountMaintenanceEntryArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceItemWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceEntryWhereInput
  }


  /**
   * Count Type MaintenanceItemCountOutputType
   */

  export type MaintenanceItemCountOutputType = {
    MaintenanceEntry: number
  }

  export type MaintenanceItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MaintenanceEntry?: boolean | MaintenanceItemCountOutputTypeCountMaintenanceEntryArgs
  }

  // Custom InputTypes
  /**
   * MaintenanceItemCountOutputType without action
   */
  export type MaintenanceItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItemCountOutputType
     */
    select?: MaintenanceItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaintenanceItemCountOutputType without action
   */
  export type MaintenanceItemCountOutputTypeCountMaintenanceEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    Vehicle?: boolean | User$VehicleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | User$VehicleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Vehicle: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Vehicle<T extends User$VehicleArgs<ExtArgs> = {}>(args?: Subset<T, User$VehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Vehicle
   */
  export type User$VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    odometer: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    odometer: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    make: string | null
    year: number | null
    odometer: number | null
    useKm: boolean | null
    userId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    make: string | null
    year: number | null
    odometer: number | null
    useKm: boolean | null
    userId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    name: number
    model: number
    make: number
    year: number
    odometer: number
    useKm: number
    userId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    odometer?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    odometer?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer?: true
    useKm?: true
    userId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer?: true
    useKm?: true
    userId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer?: true
    useKm?: true
    userId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    name: string
    model: string | null
    make: string | null
    year: number | null
    odometer: number | null
    useKm: boolean
    userId: string
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer?: boolean
    useKm?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | Vehicle$MaintenanceItemArgs<ExtArgs>
    MaintenanceEntry?: boolean | Vehicle$MaintenanceEntryArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer?: boolean
    useKm?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer?: boolean
    useKm?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer?: boolean
    useKm?: boolean
    userId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "make" | "year" | "odometer" | "useKm" | "userId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | Vehicle$MaintenanceItemArgs<ExtArgs>
    MaintenanceEntry?: boolean | Vehicle$MaintenanceEntryArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      MaintenanceItem: Prisma.$MaintenanceItemPayload<ExtArgs>[]
      MaintenanceEntry: Prisma.$MaintenanceEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string | null
      make: string | null
      year: number | null
      odometer: number | null
      useKm: boolean
      userId: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MaintenanceItem<T extends Vehicle$MaintenanceItemArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$MaintenanceItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MaintenanceEntry<T extends Vehicle$MaintenanceEntryArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$MaintenanceEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly name: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly make: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly odometer: FieldRef<"Vehicle", 'Int'>
    readonly useKm: FieldRef<"Vehicle", 'Boolean'>
    readonly userId: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.MaintenanceItem
   */
  export type Vehicle$MaintenanceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    where?: MaintenanceItemWhereInput
    orderBy?: MaintenanceItemOrderByWithRelationInput | MaintenanceItemOrderByWithRelationInput[]
    cursor?: MaintenanceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceItemScalarFieldEnum | MaintenanceItemScalarFieldEnum[]
  }

  /**
   * Vehicle.MaintenanceEntry
   */
  export type Vehicle$MaintenanceEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    where?: MaintenanceEntryWhereInput
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    cursor?: MaintenanceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceEntryScalarFieldEnum | MaintenanceEntryScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceItem
   */

  export type AggregateMaintenanceItem = {
    _count: MaintenanceItemCountAggregateOutputType | null
    _avg: MaintenanceItemAvgAggregateOutputType | null
    _sum: MaintenanceItemSumAggregateOutputType | null
    _min: MaintenanceItemMinAggregateOutputType | null
    _max: MaintenanceItemMaxAggregateOutputType | null
  }

  export type MaintenanceItemAvgAggregateOutputType = {
    id: number | null
    timeIntervalDays: number | null
    usageIntervalMiles: number | null
  }

  export type MaintenanceItemSumAggregateOutputType = {
    id: number | null
    timeIntervalDays: number | null
    usageIntervalMiles: number | null
  }

  export type MaintenanceItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    comments: string | null
    timeIntervalDays: number | null
    usageIntervalMiles: number | null
    recurring: boolean | null
    vehicleId: string | null
  }

  export type MaintenanceItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    comments: string | null
    timeIntervalDays: number | null
    usageIntervalMiles: number | null
    recurring: boolean | null
    vehicleId: string | null
  }

  export type MaintenanceItemCountAggregateOutputType = {
    id: number
    name: number
    comments: number
    timeIntervalDays: number
    usageIntervalMiles: number
    recurring: number
    vehicleId: number
    _all: number
  }


  export type MaintenanceItemAvgAggregateInputType = {
    id?: true
    timeIntervalDays?: true
    usageIntervalMiles?: true
  }

  export type MaintenanceItemSumAggregateInputType = {
    id?: true
    timeIntervalDays?: true
    usageIntervalMiles?: true
  }

  export type MaintenanceItemMinAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    timeIntervalDays?: true
    usageIntervalMiles?: true
    recurring?: true
    vehicleId?: true
  }

  export type MaintenanceItemMaxAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    timeIntervalDays?: true
    usageIntervalMiles?: true
    recurring?: true
    vehicleId?: true
  }

  export type MaintenanceItemCountAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    timeIntervalDays?: true
    usageIntervalMiles?: true
    recurring?: true
    vehicleId?: true
    _all?: true
  }

  export type MaintenanceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceItem to aggregate.
     */
    where?: MaintenanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceItems to fetch.
     */
    orderBy?: MaintenanceItemOrderByWithRelationInput | MaintenanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceItems
    **/
    _count?: true | MaintenanceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceItemMaxAggregateInputType
  }

  export type GetMaintenanceItemAggregateType<T extends MaintenanceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceItem[P]>
      : GetScalarType<T[P], AggregateMaintenanceItem[P]>
  }




  export type MaintenanceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceItemWhereInput
    orderBy?: MaintenanceItemOrderByWithAggregationInput | MaintenanceItemOrderByWithAggregationInput[]
    by: MaintenanceItemScalarFieldEnum[] | MaintenanceItemScalarFieldEnum
    having?: MaintenanceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceItemCountAggregateInputType | true
    _avg?: MaintenanceItemAvgAggregateInputType
    _sum?: MaintenanceItemSumAggregateInputType
    _min?: MaintenanceItemMinAggregateInputType
    _max?: MaintenanceItemMaxAggregateInputType
  }

  export type MaintenanceItemGroupByOutputType = {
    id: number
    name: string
    comments: string | null
    timeIntervalDays: number | null
    usageIntervalMiles: number | null
    recurring: boolean
    vehicleId: string
    _count: MaintenanceItemCountAggregateOutputType | null
    _avg: MaintenanceItemAvgAggregateOutputType | null
    _sum: MaintenanceItemSumAggregateOutputType | null
    _min: MaintenanceItemMinAggregateOutputType | null
    _max: MaintenanceItemMaxAggregateOutputType | null
  }

  type GetMaintenanceItemGroupByPayload<T extends MaintenanceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceItemGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceItemGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    timeIntervalDays?: boolean
    usageIntervalMiles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceEntry?: boolean | MaintenanceItem$MaintenanceEntryArgs<ExtArgs>
    _count?: boolean | MaintenanceItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceItem"]>

  export type MaintenanceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    timeIntervalDays?: boolean
    usageIntervalMiles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceItem"]>

  export type MaintenanceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    timeIntervalDays?: boolean
    usageIntervalMiles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceItem"]>

  export type MaintenanceItemSelectScalar = {
    id?: boolean
    name?: boolean
    comments?: boolean
    timeIntervalDays?: boolean
    usageIntervalMiles?: boolean
    recurring?: boolean
    vehicleId?: boolean
  }

  export type MaintenanceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "comments" | "timeIntervalDays" | "usageIntervalMiles" | "recurring" | "vehicleId", ExtArgs["result"]["maintenanceItem"]>
  export type MaintenanceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceEntry?: boolean | MaintenanceItem$MaintenanceEntryArgs<ExtArgs>
    _count?: boolean | MaintenanceItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceItem"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      MaintenanceEntry: Prisma.$MaintenanceEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      comments: string | null
      timeIntervalDays: number | null
      usageIntervalMiles: number | null
      recurring: boolean
      vehicleId: string
    }, ExtArgs["result"]["maintenanceItem"]>
    composites: {}
  }

  type MaintenanceItemGetPayload<S extends boolean | null | undefined | MaintenanceItemDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceItemPayload, S>

  type MaintenanceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceItemCountAggregateInputType | true
    }

  export interface MaintenanceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceItem'], meta: { name: 'MaintenanceItem' } }
    /**
     * Find zero or one MaintenanceItem that matches the filter.
     * @param {MaintenanceItemFindUniqueArgs} args - Arguments to find a MaintenanceItem
     * @example
     * // Get one MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceItemFindUniqueArgs>(args: SelectSubset<T, MaintenanceItemFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceItemFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceItem
     * @example
     * // Get one MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemFindFirstArgs} args - Arguments to find a MaintenanceItem
     * @example
     * // Get one MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceItemFindFirstArgs>(args?: SelectSubset<T, MaintenanceItemFindFirstArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemFindFirstOrThrowArgs} args - Arguments to find a MaintenanceItem
     * @example
     * // Get one MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceItems
     * const maintenanceItems = await prisma.maintenanceItem.findMany()
     * 
     * // Get first 10 MaintenanceItems
     * const maintenanceItems = await prisma.maintenanceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceItemWithIdOnly = await prisma.maintenanceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceItemFindManyArgs>(args?: SelectSubset<T, MaintenanceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceItem.
     * @param {MaintenanceItemCreateArgs} args - Arguments to create a MaintenanceItem.
     * @example
     * // Create one MaintenanceItem
     * const MaintenanceItem = await prisma.maintenanceItem.create({
     *   data: {
     *     // ... data to create a MaintenanceItem
     *   }
     * })
     * 
     */
    create<T extends MaintenanceItemCreateArgs>(args: SelectSubset<T, MaintenanceItemCreateArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceItems.
     * @param {MaintenanceItemCreateManyArgs} args - Arguments to create many MaintenanceItems.
     * @example
     * // Create many MaintenanceItems
     * const maintenanceItem = await prisma.maintenanceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceItemCreateManyArgs>(args?: SelectSubset<T, MaintenanceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceItems and returns the data saved in the database.
     * @param {MaintenanceItemCreateManyAndReturnArgs} args - Arguments to create many MaintenanceItems.
     * @example
     * // Create many MaintenanceItems
     * const maintenanceItem = await prisma.maintenanceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceItems and only return the `id`
     * const maintenanceItemWithIdOnly = await prisma.maintenanceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceItem.
     * @param {MaintenanceItemDeleteArgs} args - Arguments to delete one MaintenanceItem.
     * @example
     * // Delete one MaintenanceItem
     * const MaintenanceItem = await prisma.maintenanceItem.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceItem
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceItemDeleteArgs>(args: SelectSubset<T, MaintenanceItemDeleteArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceItem.
     * @param {MaintenanceItemUpdateArgs} args - Arguments to update one MaintenanceItem.
     * @example
     * // Update one MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceItemUpdateArgs>(args: SelectSubset<T, MaintenanceItemUpdateArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceItems.
     * @param {MaintenanceItemDeleteManyArgs} args - Arguments to filter MaintenanceItems to delete.
     * @example
     * // Delete a few MaintenanceItems
     * const { count } = await prisma.maintenanceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceItemDeleteManyArgs>(args?: SelectSubset<T, MaintenanceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceItems
     * const maintenanceItem = await prisma.maintenanceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceItemUpdateManyArgs>(args: SelectSubset<T, MaintenanceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceItems and returns the data updated in the database.
     * @param {MaintenanceItemUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceItems.
     * @example
     * // Update many MaintenanceItems
     * const maintenanceItem = await prisma.maintenanceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceItems and only return the `id`
     * const maintenanceItemWithIdOnly = await prisma.maintenanceItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceItem.
     * @param {MaintenanceItemUpsertArgs} args - Arguments to update or create a MaintenanceItem.
     * @example
     * // Update or create a MaintenanceItem
     * const maintenanceItem = await prisma.maintenanceItem.upsert({
     *   create: {
     *     // ... data to create a MaintenanceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceItem we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceItemUpsertArgs>(args: SelectSubset<T, MaintenanceItemUpsertArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemCountArgs} args - Arguments to filter MaintenanceItems to count.
     * @example
     * // Count the number of MaintenanceItems
     * const count = await prisma.maintenanceItem.count({
     *   where: {
     *     // ... the filter for the MaintenanceItems we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceItemCountArgs>(
      args?: Subset<T, MaintenanceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceItemAggregateArgs>(args: Subset<T, MaintenanceItemAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceItemAggregateType<T>>

    /**
     * Group by MaintenanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceItemGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceItem model
   */
  readonly fields: MaintenanceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MaintenanceEntry<T extends MaintenanceItem$MaintenanceEntryArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceItem$MaintenanceEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceItem model
   */
  interface MaintenanceItemFieldRefs {
    readonly id: FieldRef<"MaintenanceItem", 'Int'>
    readonly name: FieldRef<"MaintenanceItem", 'String'>
    readonly comments: FieldRef<"MaintenanceItem", 'String'>
    readonly timeIntervalDays: FieldRef<"MaintenanceItem", 'Int'>
    readonly usageIntervalMiles: FieldRef<"MaintenanceItem", 'Float'>
    readonly recurring: FieldRef<"MaintenanceItem", 'Boolean'>
    readonly vehicleId: FieldRef<"MaintenanceItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceItem findUnique
   */
  export type MaintenanceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceItem to fetch.
     */
    where: MaintenanceItemWhereUniqueInput
  }

  /**
   * MaintenanceItem findUniqueOrThrow
   */
  export type MaintenanceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceItem to fetch.
     */
    where: MaintenanceItemWhereUniqueInput
  }

  /**
   * MaintenanceItem findFirst
   */
  export type MaintenanceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceItem to fetch.
     */
    where?: MaintenanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceItems to fetch.
     */
    orderBy?: MaintenanceItemOrderByWithRelationInput | MaintenanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceItems.
     */
    cursor?: MaintenanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceItems.
     */
    distinct?: MaintenanceItemScalarFieldEnum | MaintenanceItemScalarFieldEnum[]
  }

  /**
   * MaintenanceItem findFirstOrThrow
   */
  export type MaintenanceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceItem to fetch.
     */
    where?: MaintenanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceItems to fetch.
     */
    orderBy?: MaintenanceItemOrderByWithRelationInput | MaintenanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceItems.
     */
    cursor?: MaintenanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceItems.
     */
    distinct?: MaintenanceItemScalarFieldEnum | MaintenanceItemScalarFieldEnum[]
  }

  /**
   * MaintenanceItem findMany
   */
  export type MaintenanceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceItems to fetch.
     */
    where?: MaintenanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceItems to fetch.
     */
    orderBy?: MaintenanceItemOrderByWithRelationInput | MaintenanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceItems.
     */
    cursor?: MaintenanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceItems.
     */
    skip?: number
    distinct?: MaintenanceItemScalarFieldEnum | MaintenanceItemScalarFieldEnum[]
  }

  /**
   * MaintenanceItem create
   */
  export type MaintenanceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceItem.
     */
    data: XOR<MaintenanceItemCreateInput, MaintenanceItemUncheckedCreateInput>
  }

  /**
   * MaintenanceItem createMany
   */
  export type MaintenanceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceItems.
     */
    data: MaintenanceItemCreateManyInput | MaintenanceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceItem createManyAndReturn
   */
  export type MaintenanceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceItems.
     */
    data: MaintenanceItemCreateManyInput | MaintenanceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceItem update
   */
  export type MaintenanceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceItem.
     */
    data: XOR<MaintenanceItemUpdateInput, MaintenanceItemUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceItem to update.
     */
    where: MaintenanceItemWhereUniqueInput
  }

  /**
   * MaintenanceItem updateMany
   */
  export type MaintenanceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceItems.
     */
    data: XOR<MaintenanceItemUpdateManyMutationInput, MaintenanceItemUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceItems to update
     */
    where?: MaintenanceItemWhereInput
    /**
     * Limit how many MaintenanceItems to update.
     */
    limit?: number
  }

  /**
   * MaintenanceItem updateManyAndReturn
   */
  export type MaintenanceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceItems.
     */
    data: XOR<MaintenanceItemUpdateManyMutationInput, MaintenanceItemUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceItems to update
     */
    where?: MaintenanceItemWhereInput
    /**
     * Limit how many MaintenanceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceItem upsert
   */
  export type MaintenanceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceItem to update in case it exists.
     */
    where: MaintenanceItemWhereUniqueInput
    /**
     * In case the MaintenanceItem found by the `where` argument doesn't exist, create a new MaintenanceItem with this data.
     */
    create: XOR<MaintenanceItemCreateInput, MaintenanceItemUncheckedCreateInput>
    /**
     * In case the MaintenanceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceItemUpdateInput, MaintenanceItemUncheckedUpdateInput>
  }

  /**
   * MaintenanceItem delete
   */
  export type MaintenanceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceItem to delete.
     */
    where: MaintenanceItemWhereUniqueInput
  }

  /**
   * MaintenanceItem deleteMany
   */
  export type MaintenanceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceItems to delete
     */
    where?: MaintenanceItemWhereInput
    /**
     * Limit how many MaintenanceItems to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceItem.MaintenanceEntry
   */
  export type MaintenanceItem$MaintenanceEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    where?: MaintenanceEntryWhereInput
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    cursor?: MaintenanceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceEntryScalarFieldEnum | MaintenanceEntryScalarFieldEnum[]
  }

  /**
   * MaintenanceItem without action
   */
  export type MaintenanceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceEntry
   */

  export type AggregateMaintenanceEntry = {
    _count: MaintenanceEntryCountAggregateOutputType | null
    _avg: MaintenanceEntryAvgAggregateOutputType | null
    _sum: MaintenanceEntrySumAggregateOutputType | null
    _min: MaintenanceEntryMinAggregateOutputType | null
    _max: MaintenanceEntryMaxAggregateOutputType | null
  }

  export type MaintenanceEntryAvgAggregateOutputType = {
    id: number | null
    maintenanceItemId: number | null
  }

  export type MaintenanceEntrySumAggregateOutputType = {
    id: number | null
    maintenanceItemId: number | null
  }

  export type MaintenanceEntryMinAggregateOutputType = {
    id: number | null
    title: string | null
    details: string | null
    date: Date | null
    vehicleId: string | null
    maintenanceItemId: number | null
  }

  export type MaintenanceEntryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    details: string | null
    date: Date | null
    vehicleId: string | null
    maintenanceItemId: number | null
  }

  export type MaintenanceEntryCountAggregateOutputType = {
    id: number
    title: number
    details: number
    date: number
    vehicleId: number
    maintenanceItemId: number
    _all: number
  }


  export type MaintenanceEntryAvgAggregateInputType = {
    id?: true
    maintenanceItemId?: true
  }

  export type MaintenanceEntrySumAggregateInputType = {
    id?: true
    maintenanceItemId?: true
  }

  export type MaintenanceEntryMinAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenanceItemId?: true
  }

  export type MaintenanceEntryMaxAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenanceItemId?: true
  }

  export type MaintenanceEntryCountAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenanceItemId?: true
    _all?: true
  }

  export type MaintenanceEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceEntry to aggregate.
     */
    where?: MaintenanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceEntries to fetch.
     */
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceEntries
    **/
    _count?: true | MaintenanceEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceEntryMaxAggregateInputType
  }

  export type GetMaintenanceEntryAggregateType<T extends MaintenanceEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceEntry[P]>
      : GetScalarType<T[P], AggregateMaintenanceEntry[P]>
  }




  export type MaintenanceEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceEntryWhereInput
    orderBy?: MaintenanceEntryOrderByWithAggregationInput | MaintenanceEntryOrderByWithAggregationInput[]
    by: MaintenanceEntryScalarFieldEnum[] | MaintenanceEntryScalarFieldEnum
    having?: MaintenanceEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceEntryCountAggregateInputType | true
    _avg?: MaintenanceEntryAvgAggregateInputType
    _sum?: MaintenanceEntrySumAggregateInputType
    _min?: MaintenanceEntryMinAggregateInputType
    _max?: MaintenanceEntryMaxAggregateInputType
  }

  export type MaintenanceEntryGroupByOutputType = {
    id: number
    title: string
    details: string
    date: Date
    vehicleId: string
    maintenanceItemId: number | null
    _count: MaintenanceEntryCountAggregateOutputType | null
    _avg: MaintenanceEntryAvgAggregateOutputType | null
    _sum: MaintenanceEntrySumAggregateOutputType | null
    _min: MaintenanceEntryMinAggregateOutputType | null
    _max: MaintenanceEntryMaxAggregateOutputType | null
  }

  type GetMaintenanceEntryGroupByPayload<T extends MaintenanceEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceEntryGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenanceItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceEntry"]>

  export type MaintenanceEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenanceItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceEntry"]>

  export type MaintenanceEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenanceItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceEntry"]>

  export type MaintenanceEntrySelectScalar = {
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenanceItemId?: boolean
  }

  export type MaintenanceEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "details" | "date" | "vehicleId" | "maintenanceItemId", ExtArgs["result"]["maintenanceEntry"]>
  export type MaintenanceEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }
  export type MaintenanceEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }
  export type MaintenanceEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    MaintenanceItem?: boolean | MaintenanceEntry$MaintenanceItemArgs<ExtArgs>
  }

  export type $MaintenanceEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceEntry"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      MaintenanceItem: Prisma.$MaintenanceItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      details: string
      date: Date
      vehicleId: string
      maintenanceItemId: number | null
    }, ExtArgs["result"]["maintenanceEntry"]>
    composites: {}
  }

  type MaintenanceEntryGetPayload<S extends boolean | null | undefined | MaintenanceEntryDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceEntryPayload, S>

  type MaintenanceEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceEntryCountAggregateInputType | true
    }

  export interface MaintenanceEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceEntry'], meta: { name: 'MaintenanceEntry' } }
    /**
     * Find zero or one MaintenanceEntry that matches the filter.
     * @param {MaintenanceEntryFindUniqueArgs} args - Arguments to find a MaintenanceEntry
     * @example
     * // Get one MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceEntryFindUniqueArgs>(args: SelectSubset<T, MaintenanceEntryFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceEntryFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceEntry
     * @example
     * // Get one MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryFindFirstArgs} args - Arguments to find a MaintenanceEntry
     * @example
     * // Get one MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceEntryFindFirstArgs>(args?: SelectSubset<T, MaintenanceEntryFindFirstArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryFindFirstOrThrowArgs} args - Arguments to find a MaintenanceEntry
     * @example
     * // Get one MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceEntries
     * const maintenanceEntries = await prisma.maintenanceEntry.findMany()
     * 
     * // Get first 10 MaintenanceEntries
     * const maintenanceEntries = await prisma.maintenanceEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceEntryWithIdOnly = await prisma.maintenanceEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceEntryFindManyArgs>(args?: SelectSubset<T, MaintenanceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceEntry.
     * @param {MaintenanceEntryCreateArgs} args - Arguments to create a MaintenanceEntry.
     * @example
     * // Create one MaintenanceEntry
     * const MaintenanceEntry = await prisma.maintenanceEntry.create({
     *   data: {
     *     // ... data to create a MaintenanceEntry
     *   }
     * })
     * 
     */
    create<T extends MaintenanceEntryCreateArgs>(args: SelectSubset<T, MaintenanceEntryCreateArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceEntries.
     * @param {MaintenanceEntryCreateManyArgs} args - Arguments to create many MaintenanceEntries.
     * @example
     * // Create many MaintenanceEntries
     * const maintenanceEntry = await prisma.maintenanceEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceEntryCreateManyArgs>(args?: SelectSubset<T, MaintenanceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceEntries and returns the data saved in the database.
     * @param {MaintenanceEntryCreateManyAndReturnArgs} args - Arguments to create many MaintenanceEntries.
     * @example
     * // Create many MaintenanceEntries
     * const maintenanceEntry = await prisma.maintenanceEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceEntries and only return the `id`
     * const maintenanceEntryWithIdOnly = await prisma.maintenanceEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceEntry.
     * @param {MaintenanceEntryDeleteArgs} args - Arguments to delete one MaintenanceEntry.
     * @example
     * // Delete one MaintenanceEntry
     * const MaintenanceEntry = await prisma.maintenanceEntry.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceEntry
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceEntryDeleteArgs>(args: SelectSubset<T, MaintenanceEntryDeleteArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceEntry.
     * @param {MaintenanceEntryUpdateArgs} args - Arguments to update one MaintenanceEntry.
     * @example
     * // Update one MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceEntryUpdateArgs>(args: SelectSubset<T, MaintenanceEntryUpdateArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceEntries.
     * @param {MaintenanceEntryDeleteManyArgs} args - Arguments to filter MaintenanceEntries to delete.
     * @example
     * // Delete a few MaintenanceEntries
     * const { count } = await prisma.maintenanceEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceEntryDeleteManyArgs>(args?: SelectSubset<T, MaintenanceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceEntries
     * const maintenanceEntry = await prisma.maintenanceEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceEntryUpdateManyArgs>(args: SelectSubset<T, MaintenanceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceEntries and returns the data updated in the database.
     * @param {MaintenanceEntryUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceEntries.
     * @example
     * // Update many MaintenanceEntries
     * const maintenanceEntry = await prisma.maintenanceEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceEntries and only return the `id`
     * const maintenanceEntryWithIdOnly = await prisma.maintenanceEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceEntry.
     * @param {MaintenanceEntryUpsertArgs} args - Arguments to update or create a MaintenanceEntry.
     * @example
     * // Update or create a MaintenanceEntry
     * const maintenanceEntry = await prisma.maintenanceEntry.upsert({
     *   create: {
     *     // ... data to create a MaintenanceEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceEntry we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceEntryUpsertArgs>(args: SelectSubset<T, MaintenanceEntryUpsertArgs<ExtArgs>>): Prisma__MaintenanceEntryClient<$Result.GetResult<Prisma.$MaintenanceEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryCountArgs} args - Arguments to filter MaintenanceEntries to count.
     * @example
     * // Count the number of MaintenanceEntries
     * const count = await prisma.maintenanceEntry.count({
     *   where: {
     *     // ... the filter for the MaintenanceEntries we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceEntryCountArgs>(
      args?: Subset<T, MaintenanceEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceEntryAggregateArgs>(args: Subset<T, MaintenanceEntryAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceEntryAggregateType<T>>

    /**
     * Group by MaintenanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceEntryGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceEntry model
   */
  readonly fields: MaintenanceEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MaintenanceItem<T extends MaintenanceEntry$MaintenanceItemArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceEntry$MaintenanceItemArgs<ExtArgs>>): Prisma__MaintenanceItemClient<$Result.GetResult<Prisma.$MaintenanceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceEntry model
   */
  interface MaintenanceEntryFieldRefs {
    readonly id: FieldRef<"MaintenanceEntry", 'Int'>
    readonly title: FieldRef<"MaintenanceEntry", 'String'>
    readonly details: FieldRef<"MaintenanceEntry", 'String'>
    readonly date: FieldRef<"MaintenanceEntry", 'DateTime'>
    readonly vehicleId: FieldRef<"MaintenanceEntry", 'String'>
    readonly maintenanceItemId: FieldRef<"MaintenanceEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceEntry findUnique
   */
  export type MaintenanceEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceEntry to fetch.
     */
    where: MaintenanceEntryWhereUniqueInput
  }

  /**
   * MaintenanceEntry findUniqueOrThrow
   */
  export type MaintenanceEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceEntry to fetch.
     */
    where: MaintenanceEntryWhereUniqueInput
  }

  /**
   * MaintenanceEntry findFirst
   */
  export type MaintenanceEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceEntry to fetch.
     */
    where?: MaintenanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceEntries to fetch.
     */
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceEntries.
     */
    cursor?: MaintenanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceEntries.
     */
    distinct?: MaintenanceEntryScalarFieldEnum | MaintenanceEntryScalarFieldEnum[]
  }

  /**
   * MaintenanceEntry findFirstOrThrow
   */
  export type MaintenanceEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceEntry to fetch.
     */
    where?: MaintenanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceEntries to fetch.
     */
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceEntries.
     */
    cursor?: MaintenanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceEntries.
     */
    distinct?: MaintenanceEntryScalarFieldEnum | MaintenanceEntryScalarFieldEnum[]
  }

  /**
   * MaintenanceEntry findMany
   */
  export type MaintenanceEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceEntries to fetch.
     */
    where?: MaintenanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceEntries to fetch.
     */
    orderBy?: MaintenanceEntryOrderByWithRelationInput | MaintenanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceEntries.
     */
    cursor?: MaintenanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceEntries.
     */
    skip?: number
    distinct?: MaintenanceEntryScalarFieldEnum | MaintenanceEntryScalarFieldEnum[]
  }

  /**
   * MaintenanceEntry create
   */
  export type MaintenanceEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceEntry.
     */
    data: XOR<MaintenanceEntryCreateInput, MaintenanceEntryUncheckedCreateInput>
  }

  /**
   * MaintenanceEntry createMany
   */
  export type MaintenanceEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceEntries.
     */
    data: MaintenanceEntryCreateManyInput | MaintenanceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceEntry createManyAndReturn
   */
  export type MaintenanceEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceEntries.
     */
    data: MaintenanceEntryCreateManyInput | MaintenanceEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceEntry update
   */
  export type MaintenanceEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceEntry.
     */
    data: XOR<MaintenanceEntryUpdateInput, MaintenanceEntryUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceEntry to update.
     */
    where: MaintenanceEntryWhereUniqueInput
  }

  /**
   * MaintenanceEntry updateMany
   */
  export type MaintenanceEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceEntries.
     */
    data: XOR<MaintenanceEntryUpdateManyMutationInput, MaintenanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceEntries to update
     */
    where?: MaintenanceEntryWhereInput
    /**
     * Limit how many MaintenanceEntries to update.
     */
    limit?: number
  }

  /**
   * MaintenanceEntry updateManyAndReturn
   */
  export type MaintenanceEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceEntries.
     */
    data: XOR<MaintenanceEntryUpdateManyMutationInput, MaintenanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceEntries to update
     */
    where?: MaintenanceEntryWhereInput
    /**
     * Limit how many MaintenanceEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceEntry upsert
   */
  export type MaintenanceEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceEntry to update in case it exists.
     */
    where: MaintenanceEntryWhereUniqueInput
    /**
     * In case the MaintenanceEntry found by the `where` argument doesn't exist, create a new MaintenanceEntry with this data.
     */
    create: XOR<MaintenanceEntryCreateInput, MaintenanceEntryUncheckedCreateInput>
    /**
     * In case the MaintenanceEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceEntryUpdateInput, MaintenanceEntryUncheckedUpdateInput>
  }

  /**
   * MaintenanceEntry delete
   */
  export type MaintenanceEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceEntry to delete.
     */
    where: MaintenanceEntryWhereUniqueInput
  }

  /**
   * MaintenanceEntry deleteMany
   */
  export type MaintenanceEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceEntries to delete
     */
    where?: MaintenanceEntryWhereInput
    /**
     * Limit how many MaintenanceEntries to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceEntry.MaintenanceItem
   */
  export type MaintenanceEntry$MaintenanceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceItem
     */
    select?: MaintenanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceItem
     */
    omit?: MaintenanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceItemInclude<ExtArgs> | null
    where?: MaintenanceItemWhereInput
  }

  /**
   * MaintenanceEntry without action
   */
  export type MaintenanceEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceEntry
     */
    select?: MaintenanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceEntry
     */
    omit?: MaintenanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    make: 'make',
    year: 'year',
    odometer: 'odometer',
    useKm: 'useKm',
    userId: 'userId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MaintenanceItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    comments: 'comments',
    timeIntervalDays: 'timeIntervalDays',
    usageIntervalMiles: 'usageIntervalMiles',
    recurring: 'recurring',
    vehicleId: 'vehicleId'
  };

  export type MaintenanceItemScalarFieldEnum = (typeof MaintenanceItemScalarFieldEnum)[keyof typeof MaintenanceItemScalarFieldEnum]


  export const MaintenanceEntryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    details: 'details',
    date: 'date',
    vehicleId: 'vehicleId',
    maintenanceItemId: 'maintenanceItemId'
  };

  export type MaintenanceEntryScalarFieldEnum = (typeof MaintenanceEntryScalarFieldEnum)[keyof typeof MaintenanceEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Vehicle?: VehicleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    Vehicle?: VehicleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    Vehicle?: VehicleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    name?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    make?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    odometer?: IntNullableFilter<"Vehicle"> | number | null
    useKm?: BoolFilter<"Vehicle"> | boolean
    userId?: StringFilter<"Vehicle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    MaintenanceItem?: MaintenanceItemListRelationFilter
    MaintenanceEntry?: MaintenanceEntryListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    useKm?: SortOrder
    userId?: SortOrder
    owner?: UserOrderByWithRelationInput
    MaintenanceItem?: MaintenanceItemOrderByRelationAggregateInput
    MaintenanceEntry?: MaintenanceEntryOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    name?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    make?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    odometer?: IntNullableFilter<"Vehicle"> | number | null
    useKm?: BoolFilter<"Vehicle"> | boolean
    userId?: StringFilter<"Vehicle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    MaintenanceItem?: MaintenanceItemListRelationFilter
    MaintenanceEntry?: MaintenanceEntryListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    odometer?: SortOrderInput | SortOrder
    useKm?: SortOrder
    userId?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    name?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    make?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    year?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    odometer?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    useKm?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type MaintenanceItemWhereInput = {
    AND?: MaintenanceItemWhereInput | MaintenanceItemWhereInput[]
    OR?: MaintenanceItemWhereInput[]
    NOT?: MaintenanceItemWhereInput | MaintenanceItemWhereInput[]
    id?: IntFilter<"MaintenanceItem"> | number
    name?: StringFilter<"MaintenanceItem"> | string
    comments?: StringNullableFilter<"MaintenanceItem"> | string | null
    timeIntervalDays?: IntNullableFilter<"MaintenanceItem"> | number | null
    usageIntervalMiles?: FloatNullableFilter<"MaintenanceItem"> | number | null
    recurring?: BoolFilter<"MaintenanceItem"> | boolean
    vehicleId?: StringFilter<"MaintenanceItem"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    MaintenanceEntry?: MaintenanceEntryListRelationFilter
  }

  export type MaintenanceItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrderInput | SortOrder
    timeIntervalDays?: SortOrderInput | SortOrder
    usageIntervalMiles?: SortOrderInput | SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    MaintenanceEntry?: MaintenanceEntryOrderByRelationAggregateInput
  }

  export type MaintenanceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceItemWhereInput | MaintenanceItemWhereInput[]
    OR?: MaintenanceItemWhereInput[]
    NOT?: MaintenanceItemWhereInput | MaintenanceItemWhereInput[]
    name?: StringFilter<"MaintenanceItem"> | string
    comments?: StringNullableFilter<"MaintenanceItem"> | string | null
    timeIntervalDays?: IntNullableFilter<"MaintenanceItem"> | number | null
    usageIntervalMiles?: FloatNullableFilter<"MaintenanceItem"> | number | null
    recurring?: BoolFilter<"MaintenanceItem"> | boolean
    vehicleId?: StringFilter<"MaintenanceItem"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    MaintenanceEntry?: MaintenanceEntryListRelationFilter
  }, "id">

  export type MaintenanceItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrderInput | SortOrder
    timeIntervalDays?: SortOrderInput | SortOrder
    usageIntervalMiles?: SortOrderInput | SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
    _count?: MaintenanceItemCountOrderByAggregateInput
    _avg?: MaintenanceItemAvgOrderByAggregateInput
    _max?: MaintenanceItemMaxOrderByAggregateInput
    _min?: MaintenanceItemMinOrderByAggregateInput
    _sum?: MaintenanceItemSumOrderByAggregateInput
  }

  export type MaintenanceItemScalarWhereWithAggregatesInput = {
    AND?: MaintenanceItemScalarWhereWithAggregatesInput | MaintenanceItemScalarWhereWithAggregatesInput[]
    OR?: MaintenanceItemScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceItemScalarWhereWithAggregatesInput | MaintenanceItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceItem"> | number
    name?: StringWithAggregatesFilter<"MaintenanceItem"> | string
    comments?: StringNullableWithAggregatesFilter<"MaintenanceItem"> | string | null
    timeIntervalDays?: IntNullableWithAggregatesFilter<"MaintenanceItem"> | number | null
    usageIntervalMiles?: FloatNullableWithAggregatesFilter<"MaintenanceItem"> | number | null
    recurring?: BoolWithAggregatesFilter<"MaintenanceItem"> | boolean
    vehicleId?: StringWithAggregatesFilter<"MaintenanceItem"> | string
  }

  export type MaintenanceEntryWhereInput = {
    AND?: MaintenanceEntryWhereInput | MaintenanceEntryWhereInput[]
    OR?: MaintenanceEntryWhereInput[]
    NOT?: MaintenanceEntryWhereInput | MaintenanceEntryWhereInput[]
    id?: IntFilter<"MaintenanceEntry"> | number
    title?: StringFilter<"MaintenanceEntry"> | string
    details?: StringFilter<"MaintenanceEntry"> | string
    date?: DateTimeFilter<"MaintenanceEntry"> | Date | string
    vehicleId?: StringFilter<"MaintenanceEntry"> | string
    maintenanceItemId?: IntNullableFilter<"MaintenanceEntry"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    MaintenanceItem?: XOR<MaintenanceItemNullableScalarRelationFilter, MaintenanceItemWhereInput> | null
  }

  export type MaintenanceEntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenanceItemId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    MaintenanceItem?: MaintenanceItemOrderByWithRelationInput
  }

  export type MaintenanceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceEntryWhereInput | MaintenanceEntryWhereInput[]
    OR?: MaintenanceEntryWhereInput[]
    NOT?: MaintenanceEntryWhereInput | MaintenanceEntryWhereInput[]
    title?: StringFilter<"MaintenanceEntry"> | string
    details?: StringFilter<"MaintenanceEntry"> | string
    date?: DateTimeFilter<"MaintenanceEntry"> | Date | string
    vehicleId?: StringFilter<"MaintenanceEntry"> | string
    maintenanceItemId?: IntNullableFilter<"MaintenanceEntry"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    MaintenanceItem?: XOR<MaintenanceItemNullableScalarRelationFilter, MaintenanceItemWhereInput> | null
  }, "id">

  export type MaintenanceEntryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenanceItemId?: SortOrderInput | SortOrder
    _count?: MaintenanceEntryCountOrderByAggregateInput
    _avg?: MaintenanceEntryAvgOrderByAggregateInput
    _max?: MaintenanceEntryMaxOrderByAggregateInput
    _min?: MaintenanceEntryMinOrderByAggregateInput
    _sum?: MaintenanceEntrySumOrderByAggregateInput
  }

  export type MaintenanceEntryScalarWhereWithAggregatesInput = {
    AND?: MaintenanceEntryScalarWhereWithAggregatesInput | MaintenanceEntryScalarWhereWithAggregatesInput[]
    OR?: MaintenanceEntryScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceEntryScalarWhereWithAggregatesInput | MaintenanceEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceEntry"> | number
    title?: StringWithAggregatesFilter<"MaintenanceEntry"> | string
    details?: StringWithAggregatesFilter<"MaintenanceEntry"> | string
    date?: DateTimeWithAggregatesFilter<"MaintenanceEntry"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"MaintenanceEntry"> | string
    maintenanceItemId?: IntNullableWithAggregatesFilter<"MaintenanceEntry"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    Vehicle?: VehicleCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Vehicle?: VehicleUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Vehicle?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    owner: UserCreateNestedOneWithoutVehicleInput
    MaintenanceItem?: MaintenanceItemCreateNestedManyWithoutVehicleInput
    MaintenanceEntry?: MaintenanceEntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    userId: string
    MaintenanceItem?: MaintenanceItemUncheckedCreateNestedManyWithoutVehicleInput
    MaintenanceEntry?: MaintenanceEntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    MaintenanceItem?: MaintenanceItemUpdateManyWithoutVehicleNestedInput
    MaintenanceEntry?: MaintenanceEntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    MaintenanceItem?: MaintenanceItemUncheckedUpdateManyWithoutVehicleNestedInput
    MaintenanceEntry?: MaintenanceEntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    userId: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceItemCreateInput = {
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    vehicle: VehicleCreateNestedOneWithoutMaintenanceItemInput
    MaintenanceEntry?: MaintenanceEntryCreateNestedManyWithoutMaintenanceItemInput
  }

  export type MaintenanceItemUncheckedCreateInput = {
    id?: number
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    vehicleId: string
    MaintenanceEntry?: MaintenanceEntryUncheckedCreateNestedManyWithoutMaintenanceItemInput
  }

  export type MaintenanceItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceItemNestedInput
    MaintenanceEntry?: MaintenanceEntryUpdateManyWithoutMaintenanceItemNestedInput
  }

  export type MaintenanceItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
    MaintenanceEntry?: MaintenanceEntryUncheckedUpdateManyWithoutMaintenanceItemNestedInput
  }

  export type MaintenanceItemCreateManyInput = {
    id?: number
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    vehicleId: string
  }

  export type MaintenanceItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaintenanceItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceEntryCreateInput = {
    title: string
    details: string
    date: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceEntryInput
    MaintenanceItem?: MaintenanceItemCreateNestedOneWithoutMaintenanceEntryInput
  }

  export type MaintenanceEntryUncheckedCreateInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
    maintenanceItemId?: number | null
  }

  export type MaintenanceEntryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceEntryNestedInput
    MaintenanceItem?: MaintenanceItemUpdateOneWithoutMaintenanceEntryNestedInput
  }

  export type MaintenanceEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenanceItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaintenanceEntryCreateManyInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
    maintenanceItemId?: number | null
  }

  export type MaintenanceEntryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenanceItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaintenanceItemListRelationFilter = {
    every?: MaintenanceItemWhereInput
    some?: MaintenanceItemWhereInput
    none?: MaintenanceItemWhereInput
  }

  export type MaintenanceEntryListRelationFilter = {
    every?: MaintenanceEntryWhereInput
    some?: MaintenanceEntryWhereInput
    none?: MaintenanceEntryWhereInput
  }

  export type MaintenanceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer?: SortOrder
    useKm?: SortOrder
    userId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    odometer?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer?: SortOrder
    useKm?: SortOrder
    userId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer?: SortOrder
    useKm?: SortOrder
    userId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    odometer?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type MaintenanceItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    timeIntervalDays?: SortOrder
    usageIntervalMiles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type MaintenanceItemAvgOrderByAggregateInput = {
    id?: SortOrder
    timeIntervalDays?: SortOrder
    usageIntervalMiles?: SortOrder
  }

  export type MaintenanceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    timeIntervalDays?: SortOrder
    usageIntervalMiles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type MaintenanceItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    timeIntervalDays?: SortOrder
    usageIntervalMiles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type MaintenanceItemSumOrderByAggregateInput = {
    id?: SortOrder
    timeIntervalDays?: SortOrder
    usageIntervalMiles?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MaintenanceItemNullableScalarRelationFilter = {
    is?: MaintenanceItemWhereInput | null
    isNot?: MaintenanceItemWhereInput | null
  }

  export type MaintenanceEntryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenanceItemId?: SortOrder
  }

  export type MaintenanceEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    maintenanceItemId?: SortOrder
  }

  export type MaintenanceEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenanceItemId?: SortOrder
  }

  export type MaintenanceEntryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenanceItemId?: SortOrder
  }

  export type MaintenanceEntrySumOrderByAggregateInput = {
    id?: SortOrder
    maintenanceItemId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VehicleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VehicleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehicleInput = {
    create?: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleInput
    connect?: UserWhereUniqueInput
  }

  export type MaintenanceItemCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput> | MaintenanceItemCreateWithoutVehicleInput[] | MaintenanceItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutVehicleInput | MaintenanceItemCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceItemCreateManyVehicleInputEnvelope
    connect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
  }

  export type MaintenanceEntryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput> | MaintenanceEntryCreateWithoutVehicleInput[] | MaintenanceEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutVehicleInput | MaintenanceEntryCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceEntryCreateManyVehicleInputEnvelope
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
  }

  export type MaintenanceItemUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput> | MaintenanceItemCreateWithoutVehicleInput[] | MaintenanceItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutVehicleInput | MaintenanceItemCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceItemCreateManyVehicleInputEnvelope
    connect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
  }

  export type MaintenanceEntryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput> | MaintenanceEntryCreateWithoutVehicleInput[] | MaintenanceEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutVehicleInput | MaintenanceEntryCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceEntryCreateManyVehicleInputEnvelope
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleInput
    upsert?: UserUpsertWithoutVehicleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehicleInput, UserUpdateWithoutVehicleInput>, UserUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceItemUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput> | MaintenanceItemCreateWithoutVehicleInput[] | MaintenanceItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutVehicleInput | MaintenanceItemCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceItemUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceItemUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceItemCreateManyVehicleInputEnvelope
    set?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    disconnect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    delete?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    connect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    update?: MaintenanceItemUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceItemUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceItemUpdateManyWithWhereWithoutVehicleInput | MaintenanceItemUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceItemScalarWhereInput | MaintenanceItemScalarWhereInput[]
  }

  export type MaintenanceEntryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput> | MaintenanceEntryCreateWithoutVehicleInput[] | MaintenanceEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutVehicleInput | MaintenanceEntryCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceEntryUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceEntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceEntryCreateManyVehicleInputEnvelope
    set?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    disconnect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    delete?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    update?: MaintenanceEntryUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceEntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceEntryUpdateManyWithWhereWithoutVehicleInput | MaintenanceEntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
  }

  export type MaintenanceItemUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput> | MaintenanceItemCreateWithoutVehicleInput[] | MaintenanceItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutVehicleInput | MaintenanceItemCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceItemUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceItemUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceItemCreateManyVehicleInputEnvelope
    set?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    disconnect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    delete?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    connect?: MaintenanceItemWhereUniqueInput | MaintenanceItemWhereUniqueInput[]
    update?: MaintenanceItemUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceItemUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceItemUpdateManyWithWhereWithoutVehicleInput | MaintenanceItemUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceItemScalarWhereInput | MaintenanceItemScalarWhereInput[]
  }

  export type MaintenanceEntryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput> | MaintenanceEntryCreateWithoutVehicleInput[] | MaintenanceEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutVehicleInput | MaintenanceEntryCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceEntryUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceEntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceEntryCreateManyVehicleInputEnvelope
    set?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    disconnect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    delete?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    update?: MaintenanceEntryUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceEntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceEntryUpdateManyWithWhereWithoutVehicleInput | MaintenanceEntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceItemInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceItemInput, VehicleUncheckedCreateWithoutMaintenanceItemInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceItemInput
    connect?: VehicleWhereUniqueInput
  }

  export type MaintenanceEntryCreateNestedManyWithoutMaintenanceItemInput = {
    create?: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput> | MaintenanceEntryCreateWithoutMaintenanceItemInput[] | MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput | MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput[]
    createMany?: MaintenanceEntryCreateManyMaintenanceItemInputEnvelope
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
  }

  export type MaintenanceEntryUncheckedCreateNestedManyWithoutMaintenanceItemInput = {
    create?: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput> | MaintenanceEntryCreateWithoutMaintenanceItemInput[] | MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput | MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput[]
    createMany?: MaintenanceEntryCreateManyMaintenanceItemInputEnvelope
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceItemNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceItemInput, VehicleUncheckedCreateWithoutMaintenanceItemInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceItemInput
    upsert?: VehicleUpsertWithoutMaintenanceItemInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceItemInput, VehicleUpdateWithoutMaintenanceItemInput>, VehicleUncheckedUpdateWithoutMaintenanceItemInput>
  }

  export type MaintenanceEntryUpdateManyWithoutMaintenanceItemNestedInput = {
    create?: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput> | MaintenanceEntryCreateWithoutMaintenanceItemInput[] | MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput | MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput[]
    upsert?: MaintenanceEntryUpsertWithWhereUniqueWithoutMaintenanceItemInput | MaintenanceEntryUpsertWithWhereUniqueWithoutMaintenanceItemInput[]
    createMany?: MaintenanceEntryCreateManyMaintenanceItemInputEnvelope
    set?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    disconnect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    delete?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    update?: MaintenanceEntryUpdateWithWhereUniqueWithoutMaintenanceItemInput | MaintenanceEntryUpdateWithWhereUniqueWithoutMaintenanceItemInput[]
    updateMany?: MaintenanceEntryUpdateManyWithWhereWithoutMaintenanceItemInput | MaintenanceEntryUpdateManyWithWhereWithoutMaintenanceItemInput[]
    deleteMany?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaintenanceEntryUncheckedUpdateManyWithoutMaintenanceItemNestedInput = {
    create?: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput> | MaintenanceEntryCreateWithoutMaintenanceItemInput[] | MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput[]
    connectOrCreate?: MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput | MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput[]
    upsert?: MaintenanceEntryUpsertWithWhereUniqueWithoutMaintenanceItemInput | MaintenanceEntryUpsertWithWhereUniqueWithoutMaintenanceItemInput[]
    createMany?: MaintenanceEntryCreateManyMaintenanceItemInputEnvelope
    set?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    disconnect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    delete?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    connect?: MaintenanceEntryWhereUniqueInput | MaintenanceEntryWhereUniqueInput[]
    update?: MaintenanceEntryUpdateWithWhereUniqueWithoutMaintenanceItemInput | MaintenanceEntryUpdateWithWhereUniqueWithoutMaintenanceItemInput[]
    updateMany?: MaintenanceEntryUpdateManyWithWhereWithoutMaintenanceItemInput | MaintenanceEntryUpdateManyWithWhereWithoutMaintenanceItemInput[]
    deleteMany?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceEntryInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceEntryInput, VehicleUncheckedCreateWithoutMaintenanceEntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceEntryInput
    connect?: VehicleWhereUniqueInput
  }

  export type MaintenanceItemCreateNestedOneWithoutMaintenanceEntryInput = {
    create?: XOR<MaintenanceItemCreateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedCreateWithoutMaintenanceEntryInput>
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutMaintenanceEntryInput
    connect?: MaintenanceItemWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceEntryNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceEntryInput, VehicleUncheckedCreateWithoutMaintenanceEntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceEntryInput
    upsert?: VehicleUpsertWithoutMaintenanceEntryInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceEntryInput, VehicleUpdateWithoutMaintenanceEntryInput>, VehicleUncheckedUpdateWithoutMaintenanceEntryInput>
  }

  export type MaintenanceItemUpdateOneWithoutMaintenanceEntryNestedInput = {
    create?: XOR<MaintenanceItemCreateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedCreateWithoutMaintenanceEntryInput>
    connectOrCreate?: MaintenanceItemCreateOrConnectWithoutMaintenanceEntryInput
    upsert?: MaintenanceItemUpsertWithoutMaintenanceEntryInput
    disconnect?: MaintenanceItemWhereInput | boolean
    delete?: MaintenanceItemWhereInput | boolean
    connect?: MaintenanceItemWhereUniqueInput
    update?: XOR<XOR<MaintenanceItemUpdateToOneWithWhereWithoutMaintenanceEntryInput, MaintenanceItemUpdateWithoutMaintenanceEntryInput>, MaintenanceItemUncheckedUpdateWithoutMaintenanceEntryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutOwnerInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    MaintenanceItem?: MaintenanceItemCreateNestedManyWithoutVehicleInput
    MaintenanceEntry?: MaintenanceEntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    MaintenanceItem?: MaintenanceItemUncheckedCreateNestedManyWithoutVehicleInput
    MaintenanceEntry?: MaintenanceEntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleCreateManyOwnerInputEnvelope = {
    data: VehicleCreateManyOwnerInput | VehicleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    name?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    make?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    odometer?: IntNullableFilter<"Vehicle"> | number | null
    useKm?: BoolFilter<"Vehicle"> | boolean
    userId?: StringFilter<"Vehicle"> | string
  }

  export type UserCreateWithoutVehicleInput = {
    id?: string
    name?: string | null
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutVehicleInput = {
    id?: string
    name?: string | null
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutVehicleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceItemCreateWithoutVehicleInput = {
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    MaintenanceEntry?: MaintenanceEntryCreateNestedManyWithoutMaintenanceItemInput
  }

  export type MaintenanceItemUncheckedCreateWithoutVehicleInput = {
    id?: number
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    MaintenanceEntry?: MaintenanceEntryUncheckedCreateNestedManyWithoutMaintenanceItemInput
  }

  export type MaintenanceItemCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceItemWhereUniqueInput
    create: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceItemCreateManyVehicleInputEnvelope = {
    data: MaintenanceItemCreateManyVehicleInput | MaintenanceItemCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceEntryCreateWithoutVehicleInput = {
    title: string
    details: string
    date: Date | string
    MaintenanceItem?: MaintenanceItemCreateNestedOneWithoutMaintenanceEntryInput
  }

  export type MaintenanceEntryUncheckedCreateWithoutVehicleInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    maintenanceItemId?: number | null
  }

  export type MaintenanceEntryCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceEntryWhereUniqueInput
    create: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceEntryCreateManyVehicleInputEnvelope = {
    data: MaintenanceEntryCreateManyVehicleInput | MaintenanceEntryCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehicleInput = {
    update: XOR<UserUpdateWithoutVehicleInput, UserUncheckedUpdateWithoutVehicleInput>
    create: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehicleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehicleInput, UserUncheckedUpdateWithoutVehicleInput>
  }

  export type UserUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceItemUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceItemWhereUniqueInput
    update: XOR<MaintenanceItemUpdateWithoutVehicleInput, MaintenanceItemUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceItemCreateWithoutVehicleInput, MaintenanceItemUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceItemUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceItemWhereUniqueInput
    data: XOR<MaintenanceItemUpdateWithoutVehicleInput, MaintenanceItemUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceItemUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceItemScalarWhereInput
    data: XOR<MaintenanceItemUpdateManyMutationInput, MaintenanceItemUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceItemScalarWhereInput = {
    AND?: MaintenanceItemScalarWhereInput | MaintenanceItemScalarWhereInput[]
    OR?: MaintenanceItemScalarWhereInput[]
    NOT?: MaintenanceItemScalarWhereInput | MaintenanceItemScalarWhereInput[]
    id?: IntFilter<"MaintenanceItem"> | number
    name?: StringFilter<"MaintenanceItem"> | string
    comments?: StringNullableFilter<"MaintenanceItem"> | string | null
    timeIntervalDays?: IntNullableFilter<"MaintenanceItem"> | number | null
    usageIntervalMiles?: FloatNullableFilter<"MaintenanceItem"> | number | null
    recurring?: BoolFilter<"MaintenanceItem"> | boolean
    vehicleId?: StringFilter<"MaintenanceItem"> | string
  }

  export type MaintenanceEntryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceEntryWhereUniqueInput
    update: XOR<MaintenanceEntryUpdateWithoutVehicleInput, MaintenanceEntryUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceEntryCreateWithoutVehicleInput, MaintenanceEntryUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceEntryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceEntryWhereUniqueInput
    data: XOR<MaintenanceEntryUpdateWithoutVehicleInput, MaintenanceEntryUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceEntryUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceEntryScalarWhereInput
    data: XOR<MaintenanceEntryUpdateManyMutationInput, MaintenanceEntryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceEntryScalarWhereInput = {
    AND?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
    OR?: MaintenanceEntryScalarWhereInput[]
    NOT?: MaintenanceEntryScalarWhereInput | MaintenanceEntryScalarWhereInput[]
    id?: IntFilter<"MaintenanceEntry"> | number
    title?: StringFilter<"MaintenanceEntry"> | string
    details?: StringFilter<"MaintenanceEntry"> | string
    date?: DateTimeFilter<"MaintenanceEntry"> | Date | string
    vehicleId?: StringFilter<"MaintenanceEntry"> | string
    maintenanceItemId?: IntNullableFilter<"MaintenanceEntry"> | number | null
  }

  export type VehicleCreateWithoutMaintenanceItemInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    owner: UserCreateNestedOneWithoutVehicleInput
    MaintenanceEntry?: MaintenanceEntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceItemInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    userId: string
    MaintenanceEntry?: MaintenanceEntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceItemInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceItemInput, VehicleUncheckedCreateWithoutMaintenanceItemInput>
  }

  export type MaintenanceEntryCreateWithoutMaintenanceItemInput = {
    title: string
    details: string
    date: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceEntryInput
  }

  export type MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
  }

  export type MaintenanceEntryCreateOrConnectWithoutMaintenanceItemInput = {
    where: MaintenanceEntryWhereUniqueInput
    create: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput>
  }

  export type MaintenanceEntryCreateManyMaintenanceItemInputEnvelope = {
    data: MaintenanceEntryCreateManyMaintenanceItemInput | MaintenanceEntryCreateManyMaintenanceItemInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutMaintenanceItemInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceItemInput, VehicleUncheckedUpdateWithoutMaintenanceItemInput>
    create: XOR<VehicleCreateWithoutMaintenanceItemInput, VehicleUncheckedCreateWithoutMaintenanceItemInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceItemInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceItemInput, VehicleUncheckedUpdateWithoutMaintenanceItemInput>
  }

  export type VehicleUpdateWithoutMaintenanceItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    MaintenanceEntry?: MaintenanceEntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    MaintenanceEntry?: MaintenanceEntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type MaintenanceEntryUpsertWithWhereUniqueWithoutMaintenanceItemInput = {
    where: MaintenanceEntryWhereUniqueInput
    update: XOR<MaintenanceEntryUpdateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedUpdateWithoutMaintenanceItemInput>
    create: XOR<MaintenanceEntryCreateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedCreateWithoutMaintenanceItemInput>
  }

  export type MaintenanceEntryUpdateWithWhereUniqueWithoutMaintenanceItemInput = {
    where: MaintenanceEntryWhereUniqueInput
    data: XOR<MaintenanceEntryUpdateWithoutMaintenanceItemInput, MaintenanceEntryUncheckedUpdateWithoutMaintenanceItemInput>
  }

  export type MaintenanceEntryUpdateManyWithWhereWithoutMaintenanceItemInput = {
    where: MaintenanceEntryScalarWhereInput
    data: XOR<MaintenanceEntryUpdateManyMutationInput, MaintenanceEntryUncheckedUpdateManyWithoutMaintenanceItemInput>
  }

  export type VehicleCreateWithoutMaintenanceEntryInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    owner: UserCreateNestedOneWithoutVehicleInput
    MaintenanceItem?: MaintenanceItemCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceEntryInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
    userId: string
    MaintenanceItem?: MaintenanceItemUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceEntryInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceEntryInput, VehicleUncheckedCreateWithoutMaintenanceEntryInput>
  }

  export type MaintenanceItemCreateWithoutMaintenanceEntryInput = {
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    vehicle: VehicleCreateNestedOneWithoutMaintenanceItemInput
  }

  export type MaintenanceItemUncheckedCreateWithoutMaintenanceEntryInput = {
    id?: number
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
    vehicleId: string
  }

  export type MaintenanceItemCreateOrConnectWithoutMaintenanceEntryInput = {
    where: MaintenanceItemWhereUniqueInput
    create: XOR<MaintenanceItemCreateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedCreateWithoutMaintenanceEntryInput>
  }

  export type VehicleUpsertWithoutMaintenanceEntryInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceEntryInput, VehicleUncheckedUpdateWithoutMaintenanceEntryInput>
    create: XOR<VehicleCreateWithoutMaintenanceEntryInput, VehicleUncheckedCreateWithoutMaintenanceEntryInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceEntryInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceEntryInput, VehicleUncheckedUpdateWithoutMaintenanceEntryInput>
  }

  export type VehicleUpdateWithoutMaintenanceEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    MaintenanceItem?: MaintenanceItemUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    MaintenanceItem?: MaintenanceItemUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type MaintenanceItemUpsertWithoutMaintenanceEntryInput = {
    update: XOR<MaintenanceItemUpdateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedUpdateWithoutMaintenanceEntryInput>
    create: XOR<MaintenanceItemCreateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedCreateWithoutMaintenanceEntryInput>
    where?: MaintenanceItemWhereInput
  }

  export type MaintenanceItemUpdateToOneWithWhereWithoutMaintenanceEntryInput = {
    where?: MaintenanceItemWhereInput
    data: XOR<MaintenanceItemUpdateWithoutMaintenanceEntryInput, MaintenanceItemUncheckedUpdateWithoutMaintenanceEntryInput>
  }

  export type MaintenanceItemUpdateWithoutMaintenanceEntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceItemNestedInput
  }

  export type MaintenanceItemUncheckedUpdateWithoutMaintenanceEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateManyOwnerInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer?: number | null
    useKm: boolean
  }

  export type VehicleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    MaintenanceItem?: MaintenanceItemUpdateManyWithoutVehicleNestedInput
    MaintenanceEntry?: MaintenanceEntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
    MaintenanceItem?: MaintenanceItemUncheckedUpdateManyWithoutVehicleNestedInput
    MaintenanceEntry?: MaintenanceEntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer?: NullableIntFieldUpdateOperationsInput | number | null
    useKm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaintenanceItemCreateManyVehicleInput = {
    id?: number
    name: string
    comments?: string | null
    timeIntervalDays?: number | null
    usageIntervalMiles?: number | null
    recurring: boolean
  }

  export type MaintenanceEntryCreateManyVehicleInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    maintenanceItemId?: number | null
  }

  export type MaintenanceItemUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    MaintenanceEntry?: MaintenanceEntryUpdateManyWithoutMaintenanceItemNestedInput
  }

  export type MaintenanceItemUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    MaintenanceEntry?: MaintenanceEntryUncheckedUpdateManyWithoutMaintenanceItemNestedInput
  }

  export type MaintenanceItemUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    timeIntervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    usageIntervalMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaintenanceEntryUpdateWithoutVehicleInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    MaintenanceItem?: MaintenanceItemUpdateOneWithoutMaintenanceEntryNestedInput
  }

  export type MaintenanceEntryUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaintenanceEntryUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaintenanceEntryCreateManyMaintenanceItemInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
  }

  export type MaintenanceEntryUpdateWithoutMaintenanceItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceEntryNestedInput
  }

  export type MaintenanceEntryUncheckedUpdateWithoutMaintenanceItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceEntryUncheckedUpdateManyWithoutMaintenanceItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}