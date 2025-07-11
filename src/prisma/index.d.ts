
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
 * Model Maintenance_Item
 * 
 */
export type Maintenance_Item = $Result.DefaultSelection<Prisma.$Maintenance_ItemPayload>
/**
 * Model Maintenance_Entry
 * 
 */
export type Maintenance_Entry = $Result.DefaultSelection<Prisma.$Maintenance_EntryPayload>

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
   * `prisma.maintenance_Item`: Exposes CRUD operations for the **Maintenance_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenance_Items
    * const maintenance_Items = await prisma.maintenance_Item.findMany()
    * ```
    */
  get maintenance_Item(): Prisma.Maintenance_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance_Entry`: Exposes CRUD operations for the **Maintenance_Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenance_Entries
    * const maintenance_Entries = await prisma.maintenance_Entry.findMany()
    * ```
    */
  get maintenance_Entry(): Prisma.Maintenance_EntryDelegate<ExtArgs, ClientOptions>;
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
    Maintenance_Item: 'Maintenance_Item',
    Maintenance_Entry: 'Maintenance_Entry'
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
      modelProps: "user" | "vehicle" | "maintenance_Item" | "maintenance_Entry"
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
      Maintenance_Item: {
        payload: Prisma.$Maintenance_ItemPayload<ExtArgs>
        fields: Prisma.Maintenance_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Maintenance_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Maintenance_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          findFirst: {
            args: Prisma.Maintenance_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Maintenance_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          findMany: {
            args: Prisma.Maintenance_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>[]
          }
          create: {
            args: Prisma.Maintenance_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          createMany: {
            args: Prisma.Maintenance_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Maintenance_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>[]
          }
          delete: {
            args: Prisma.Maintenance_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          update: {
            args: Prisma.Maintenance_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Maintenance_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Maintenance_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Maintenance_ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>[]
          }
          upsert: {
            args: Prisma.Maintenance_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_ItemPayload>
          }
          aggregate: {
            args: Prisma.Maintenance_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance_Item>
          }
          groupBy: {
            args: Prisma.Maintenance_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Maintenance_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_ItemCountAggregateOutputType> | number
          }
        }
      }
      Maintenance_Entry: {
        payload: Prisma.$Maintenance_EntryPayload<ExtArgs>
        fields: Prisma.Maintenance_EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Maintenance_EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Maintenance_EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          findFirst: {
            args: Prisma.Maintenance_EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Maintenance_EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          findMany: {
            args: Prisma.Maintenance_EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>[]
          }
          create: {
            args: Prisma.Maintenance_EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          createMany: {
            args: Prisma.Maintenance_EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Maintenance_EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>[]
          }
          delete: {
            args: Prisma.Maintenance_EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          update: {
            args: Prisma.Maintenance_EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          deleteMany: {
            args: Prisma.Maintenance_EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Maintenance_EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Maintenance_EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>[]
          }
          upsert: {
            args: Prisma.Maintenance_EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Maintenance_EntryPayload>
          }
          aggregate: {
            args: Prisma.Maintenance_EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance_Entry>
          }
          groupBy: {
            args: Prisma.Maintenance_EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Maintenance_EntryCountArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_EntryCountAggregateOutputType> | number
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
    maintenance_Item?: Maintenance_ItemOmit
    maintenance_Entry?: Maintenance_EntryOmit
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
    Maintenance_Item: number
    Maintenance_Entry: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Maintenance_Item?: boolean | VehicleCountOutputTypeCountMaintenance_ItemArgs
    Maintenance_Entry?: boolean | VehicleCountOutputTypeCountMaintenance_EntryArgs
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
  export type VehicleCountOutputTypeCountMaintenance_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Maintenance_ItemWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenance_EntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Maintenance_EntryWhereInput
  }


  /**
   * Count Type Maintenance_ItemCountOutputType
   */

  export type Maintenance_ItemCountOutputType = {
    Maintenance_Entry: number
  }

  export type Maintenance_ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Maintenance_Entry?: boolean | Maintenance_ItemCountOutputTypeCountMaintenance_EntryArgs
  }

  // Custom InputTypes
  /**
   * Maintenance_ItemCountOutputType without action
   */
  export type Maintenance_ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_ItemCountOutputType
     */
    select?: Maintenance_ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Maintenance_ItemCountOutputType without action
   */
  export type Maintenance_ItemCountOutputTypeCountMaintenance_EntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Maintenance_EntryWhereInput
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
    odometer_miles: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    odometer_miles: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    make: string | null
    year: number | null
    odometer_miles: number | null
    userId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    make: string | null
    year: number | null
    odometer_miles: number | null
    userId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    name: number
    model: number
    make: number
    year: number
    odometer_miles: number
    userId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    odometer_miles?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    odometer_miles?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer_miles?: true
    userId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer_miles?: true
    userId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    make?: true
    year?: true
    odometer_miles?: true
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
    odometer_miles: number | null
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
    odometer_miles?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    Maintenance_Item?: boolean | Vehicle$Maintenance_ItemArgs<ExtArgs>
    Maintenance_Entry?: boolean | Vehicle$Maintenance_EntryArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer_miles?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer_miles?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    make?: boolean
    year?: boolean
    odometer_miles?: boolean
    userId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "make" | "year" | "odometer_miles" | "userId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    Maintenance_Item?: boolean | Vehicle$Maintenance_ItemArgs<ExtArgs>
    Maintenance_Entry?: boolean | Vehicle$Maintenance_EntryArgs<ExtArgs>
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
      Maintenance_Item: Prisma.$Maintenance_ItemPayload<ExtArgs>[]
      Maintenance_Entry: Prisma.$Maintenance_EntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string | null
      make: string | null
      year: number | null
      odometer_miles: number | null
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
    Maintenance_Item<T extends Vehicle$Maintenance_ItemArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$Maintenance_ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Maintenance_Entry<T extends Vehicle$Maintenance_EntryArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$Maintenance_EntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly odometer_miles: FieldRef<"Vehicle", 'Int'>
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
   * Vehicle.Maintenance_Item
   */
  export type Vehicle$Maintenance_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    where?: Maintenance_ItemWhereInput
    orderBy?: Maintenance_ItemOrderByWithRelationInput | Maintenance_ItemOrderByWithRelationInput[]
    cursor?: Maintenance_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Maintenance_ItemScalarFieldEnum | Maintenance_ItemScalarFieldEnum[]
  }

  /**
   * Vehicle.Maintenance_Entry
   */
  export type Vehicle$Maintenance_EntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    where?: Maintenance_EntryWhereInput
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    cursor?: Maintenance_EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Maintenance_EntryScalarFieldEnum | Maintenance_EntryScalarFieldEnum[]
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
   * Model Maintenance_Item
   */

  export type AggregateMaintenance_Item = {
    _count: Maintenance_ItemCountAggregateOutputType | null
    _avg: Maintenance_ItemAvgAggregateOutputType | null
    _sum: Maintenance_ItemSumAggregateOutputType | null
    _min: Maintenance_ItemMinAggregateOutputType | null
    _max: Maintenance_ItemMaxAggregateOutputType | null
  }

  export type Maintenance_ItemAvgAggregateOutputType = {
    id: number | null
    time_interval_days: number | null
    usage_interval_miles: number | null
  }

  export type Maintenance_ItemSumAggregateOutputType = {
    id: number | null
    time_interval_days: number | null
    usage_interval_miles: number | null
  }

  export type Maintenance_ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    comments: string | null
    time_interval_days: number | null
    usage_interval_miles: number | null
    recurring: boolean | null
    vehicleId: string | null
  }

  export type Maintenance_ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    comments: string | null
    time_interval_days: number | null
    usage_interval_miles: number | null
    recurring: boolean | null
    vehicleId: string | null
  }

  export type Maintenance_ItemCountAggregateOutputType = {
    id: number
    name: number
    comments: number
    time_interval_days: number
    usage_interval_miles: number
    recurring: number
    vehicleId: number
    _all: number
  }


  export type Maintenance_ItemAvgAggregateInputType = {
    id?: true
    time_interval_days?: true
    usage_interval_miles?: true
  }

  export type Maintenance_ItemSumAggregateInputType = {
    id?: true
    time_interval_days?: true
    usage_interval_miles?: true
  }

  export type Maintenance_ItemMinAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    time_interval_days?: true
    usage_interval_miles?: true
    recurring?: true
    vehicleId?: true
  }

  export type Maintenance_ItemMaxAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    time_interval_days?: true
    usage_interval_miles?: true
    recurring?: true
    vehicleId?: true
  }

  export type Maintenance_ItemCountAggregateInputType = {
    id?: true
    name?: true
    comments?: true
    time_interval_days?: true
    usage_interval_miles?: true
    recurring?: true
    vehicleId?: true
    _all?: true
  }

  export type Maintenance_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance_Item to aggregate.
     */
    where?: Maintenance_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Items to fetch.
     */
    orderBy?: Maintenance_ItemOrderByWithRelationInput | Maintenance_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Maintenance_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenance_Items
    **/
    _count?: true | Maintenance_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Maintenance_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Maintenance_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Maintenance_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Maintenance_ItemMaxAggregateInputType
  }

  export type GetMaintenance_ItemAggregateType<T extends Maintenance_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance_Item[P]>
      : GetScalarType<T[P], AggregateMaintenance_Item[P]>
  }




  export type Maintenance_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Maintenance_ItemWhereInput
    orderBy?: Maintenance_ItemOrderByWithAggregationInput | Maintenance_ItemOrderByWithAggregationInput[]
    by: Maintenance_ItemScalarFieldEnum[] | Maintenance_ItemScalarFieldEnum
    having?: Maintenance_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Maintenance_ItemCountAggregateInputType | true
    _avg?: Maintenance_ItemAvgAggregateInputType
    _sum?: Maintenance_ItemSumAggregateInputType
    _min?: Maintenance_ItemMinAggregateInputType
    _max?: Maintenance_ItemMaxAggregateInputType
  }

  export type Maintenance_ItemGroupByOutputType = {
    id: number
    name: string
    comments: string | null
    time_interval_days: number | null
    usage_interval_miles: number | null
    recurring: boolean
    vehicleId: string
    _count: Maintenance_ItemCountAggregateOutputType | null
    _avg: Maintenance_ItemAvgAggregateOutputType | null
    _sum: Maintenance_ItemSumAggregateOutputType | null
    _min: Maintenance_ItemMinAggregateOutputType | null
    _max: Maintenance_ItemMaxAggregateOutputType | null
  }

  type GetMaintenance_ItemGroupByPayload<T extends Maintenance_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maintenance_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Maintenance_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Maintenance_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Maintenance_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Maintenance_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    time_interval_days?: boolean
    usage_interval_miles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Maintenance_Entry?: boolean | Maintenance_Item$Maintenance_EntryArgs<ExtArgs>
    _count?: boolean | Maintenance_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Item"]>

  export type Maintenance_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    time_interval_days?: boolean
    usage_interval_miles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Item"]>

  export type Maintenance_ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    comments?: boolean
    time_interval_days?: boolean
    usage_interval_miles?: boolean
    recurring?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Item"]>

  export type Maintenance_ItemSelectScalar = {
    id?: boolean
    name?: boolean
    comments?: boolean
    time_interval_days?: boolean
    usage_interval_miles?: boolean
    recurring?: boolean
    vehicleId?: boolean
  }

  export type Maintenance_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "comments" | "time_interval_days" | "usage_interval_miles" | "recurring" | "vehicleId", ExtArgs["result"]["maintenance_Item"]>
  export type Maintenance_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    Maintenance_Entry?: boolean | Maintenance_Item$Maintenance_EntryArgs<ExtArgs>
    _count?: boolean | Maintenance_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Maintenance_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type Maintenance_ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $Maintenance_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance_Item"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      Maintenance_Entry: Prisma.$Maintenance_EntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      comments: string | null
      time_interval_days: number | null
      usage_interval_miles: number | null
      recurring: boolean
      vehicleId: string
    }, ExtArgs["result"]["maintenance_Item"]>
    composites: {}
  }

  type Maintenance_ItemGetPayload<S extends boolean | null | undefined | Maintenance_ItemDefaultArgs> = $Result.GetResult<Prisma.$Maintenance_ItemPayload, S>

  type Maintenance_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Maintenance_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Maintenance_ItemCountAggregateInputType | true
    }

  export interface Maintenance_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance_Item'], meta: { name: 'Maintenance_Item' } }
    /**
     * Find zero or one Maintenance_Item that matches the filter.
     * @param {Maintenance_ItemFindUniqueArgs} args - Arguments to find a Maintenance_Item
     * @example
     * // Get one Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Maintenance_ItemFindUniqueArgs>(args: SelectSubset<T, Maintenance_ItemFindUniqueArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Maintenance_ItemFindUniqueOrThrowArgs} args - Arguments to find a Maintenance_Item
     * @example
     * // Get one Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Maintenance_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Maintenance_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemFindFirstArgs} args - Arguments to find a Maintenance_Item
     * @example
     * // Get one Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Maintenance_ItemFindFirstArgs>(args?: SelectSubset<T, Maintenance_ItemFindFirstArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemFindFirstOrThrowArgs} args - Arguments to find a Maintenance_Item
     * @example
     * // Get one Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Maintenance_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Maintenance_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenance_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenance_Items
     * const maintenance_Items = await prisma.maintenance_Item.findMany()
     * 
     * // Get first 10 Maintenance_Items
     * const maintenance_Items = await prisma.maintenance_Item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenance_ItemWithIdOnly = await prisma.maintenance_Item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Maintenance_ItemFindManyArgs>(args?: SelectSubset<T, Maintenance_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance_Item.
     * @param {Maintenance_ItemCreateArgs} args - Arguments to create a Maintenance_Item.
     * @example
     * // Create one Maintenance_Item
     * const Maintenance_Item = await prisma.maintenance_Item.create({
     *   data: {
     *     // ... data to create a Maintenance_Item
     *   }
     * })
     * 
     */
    create<T extends Maintenance_ItemCreateArgs>(args: SelectSubset<T, Maintenance_ItemCreateArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenance_Items.
     * @param {Maintenance_ItemCreateManyArgs} args - Arguments to create many Maintenance_Items.
     * @example
     * // Create many Maintenance_Items
     * const maintenance_Item = await prisma.maintenance_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Maintenance_ItemCreateManyArgs>(args?: SelectSubset<T, Maintenance_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenance_Items and returns the data saved in the database.
     * @param {Maintenance_ItemCreateManyAndReturnArgs} args - Arguments to create many Maintenance_Items.
     * @example
     * // Create many Maintenance_Items
     * const maintenance_Item = await prisma.maintenance_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenance_Items and only return the `id`
     * const maintenance_ItemWithIdOnly = await prisma.maintenance_Item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Maintenance_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, Maintenance_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance_Item.
     * @param {Maintenance_ItemDeleteArgs} args - Arguments to delete one Maintenance_Item.
     * @example
     * // Delete one Maintenance_Item
     * const Maintenance_Item = await prisma.maintenance_Item.delete({
     *   where: {
     *     // ... filter to delete one Maintenance_Item
     *   }
     * })
     * 
     */
    delete<T extends Maintenance_ItemDeleteArgs>(args: SelectSubset<T, Maintenance_ItemDeleteArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance_Item.
     * @param {Maintenance_ItemUpdateArgs} args - Arguments to update one Maintenance_Item.
     * @example
     * // Update one Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Maintenance_ItemUpdateArgs>(args: SelectSubset<T, Maintenance_ItemUpdateArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenance_Items.
     * @param {Maintenance_ItemDeleteManyArgs} args - Arguments to filter Maintenance_Items to delete.
     * @example
     * // Delete a few Maintenance_Items
     * const { count } = await prisma.maintenance_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Maintenance_ItemDeleteManyArgs>(args?: SelectSubset<T, Maintenance_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenance_Items
     * const maintenance_Item = await prisma.maintenance_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Maintenance_ItemUpdateManyArgs>(args: SelectSubset<T, Maintenance_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_Items and returns the data updated in the database.
     * @param {Maintenance_ItemUpdateManyAndReturnArgs} args - Arguments to update many Maintenance_Items.
     * @example
     * // Update many Maintenance_Items
     * const maintenance_Item = await prisma.maintenance_Item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenance_Items and only return the `id`
     * const maintenance_ItemWithIdOnly = await prisma.maintenance_Item.updateManyAndReturn({
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
    updateManyAndReturn<T extends Maintenance_ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, Maintenance_ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance_Item.
     * @param {Maintenance_ItemUpsertArgs} args - Arguments to update or create a Maintenance_Item.
     * @example
     * // Update or create a Maintenance_Item
     * const maintenance_Item = await prisma.maintenance_Item.upsert({
     *   create: {
     *     // ... data to create a Maintenance_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance_Item we want to update
     *   }
     * })
     */
    upsert<T extends Maintenance_ItemUpsertArgs>(args: SelectSubset<T, Maintenance_ItemUpsertArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenance_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemCountArgs} args - Arguments to filter Maintenance_Items to count.
     * @example
     * // Count the number of Maintenance_Items
     * const count = await prisma.maintenance_Item.count({
     *   where: {
     *     // ... the filter for the Maintenance_Items we want to count
     *   }
     * })
    **/
    count<T extends Maintenance_ItemCountArgs>(
      args?: Subset<T, Maintenance_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maintenance_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Maintenance_ItemAggregateArgs>(args: Subset<T, Maintenance_ItemAggregateArgs>): Prisma.PrismaPromise<GetMaintenance_ItemAggregateType<T>>

    /**
     * Group by Maintenance_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_ItemGroupByArgs} args - Group by arguments.
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
      T extends Maintenance_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Maintenance_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Maintenance_ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Maintenance_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenance_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance_Item model
   */
  readonly fields: Maintenance_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Maintenance_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Maintenance_Entry<T extends Maintenance_Item$Maintenance_EntryArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance_Item$Maintenance_EntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Maintenance_Item model
   */
  interface Maintenance_ItemFieldRefs {
    readonly id: FieldRef<"Maintenance_Item", 'Int'>
    readonly name: FieldRef<"Maintenance_Item", 'String'>
    readonly comments: FieldRef<"Maintenance_Item", 'String'>
    readonly time_interval_days: FieldRef<"Maintenance_Item", 'Int'>
    readonly usage_interval_miles: FieldRef<"Maintenance_Item", 'Float'>
    readonly recurring: FieldRef<"Maintenance_Item", 'Boolean'>
    readonly vehicleId: FieldRef<"Maintenance_Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance_Item findUnique
   */
  export type Maintenance_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Item to fetch.
     */
    where: Maintenance_ItemWhereUniqueInput
  }

  /**
   * Maintenance_Item findUniqueOrThrow
   */
  export type Maintenance_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Item to fetch.
     */
    where: Maintenance_ItemWhereUniqueInput
  }

  /**
   * Maintenance_Item findFirst
   */
  export type Maintenance_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Item to fetch.
     */
    where?: Maintenance_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Items to fetch.
     */
    orderBy?: Maintenance_ItemOrderByWithRelationInput | Maintenance_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenance_Items.
     */
    cursor?: Maintenance_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenance_Items.
     */
    distinct?: Maintenance_ItemScalarFieldEnum | Maintenance_ItemScalarFieldEnum[]
  }

  /**
   * Maintenance_Item findFirstOrThrow
   */
  export type Maintenance_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Item to fetch.
     */
    where?: Maintenance_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Items to fetch.
     */
    orderBy?: Maintenance_ItemOrderByWithRelationInput | Maintenance_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenance_Items.
     */
    cursor?: Maintenance_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenance_Items.
     */
    distinct?: Maintenance_ItemScalarFieldEnum | Maintenance_ItemScalarFieldEnum[]
  }

  /**
   * Maintenance_Item findMany
   */
  export type Maintenance_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Items to fetch.
     */
    where?: Maintenance_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Items to fetch.
     */
    orderBy?: Maintenance_ItemOrderByWithRelationInput | Maintenance_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenance_Items.
     */
    cursor?: Maintenance_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Items.
     */
    skip?: number
    distinct?: Maintenance_ItemScalarFieldEnum | Maintenance_ItemScalarFieldEnum[]
  }

  /**
   * Maintenance_Item create
   */
  export type Maintenance_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance_Item.
     */
    data: XOR<Maintenance_ItemCreateInput, Maintenance_ItemUncheckedCreateInput>
  }

  /**
   * Maintenance_Item createMany
   */
  export type Maintenance_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenance_Items.
     */
    data: Maintenance_ItemCreateManyInput | Maintenance_ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance_Item createManyAndReturn
   */
  export type Maintenance_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenance_Items.
     */
    data: Maintenance_ItemCreateManyInput | Maintenance_ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance_Item update
   */
  export type Maintenance_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance_Item.
     */
    data: XOR<Maintenance_ItemUpdateInput, Maintenance_ItemUncheckedUpdateInput>
    /**
     * Choose, which Maintenance_Item to update.
     */
    where: Maintenance_ItemWhereUniqueInput
  }

  /**
   * Maintenance_Item updateMany
   */
  export type Maintenance_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenance_Items.
     */
    data: XOR<Maintenance_ItemUpdateManyMutationInput, Maintenance_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Maintenance_Items to update
     */
    where?: Maintenance_ItemWhereInput
    /**
     * Limit how many Maintenance_Items to update.
     */
    limit?: number
  }

  /**
   * Maintenance_Item updateManyAndReturn
   */
  export type Maintenance_ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * The data used to update Maintenance_Items.
     */
    data: XOR<Maintenance_ItemUpdateManyMutationInput, Maintenance_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Maintenance_Items to update
     */
    where?: Maintenance_ItemWhereInput
    /**
     * Limit how many Maintenance_Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance_Item upsert
   */
  export type Maintenance_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance_Item to update in case it exists.
     */
    where: Maintenance_ItemWhereUniqueInput
    /**
     * In case the Maintenance_Item found by the `where` argument doesn't exist, create a new Maintenance_Item with this data.
     */
    create: XOR<Maintenance_ItemCreateInput, Maintenance_ItemUncheckedCreateInput>
    /**
     * In case the Maintenance_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Maintenance_ItemUpdateInput, Maintenance_ItemUncheckedUpdateInput>
  }

  /**
   * Maintenance_Item delete
   */
  export type Maintenance_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    /**
     * Filter which Maintenance_Item to delete.
     */
    where: Maintenance_ItemWhereUniqueInput
  }

  /**
   * Maintenance_Item deleteMany
   */
  export type Maintenance_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance_Items to delete
     */
    where?: Maintenance_ItemWhereInput
    /**
     * Limit how many Maintenance_Items to delete.
     */
    limit?: number
  }

  /**
   * Maintenance_Item.Maintenance_Entry
   */
  export type Maintenance_Item$Maintenance_EntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    where?: Maintenance_EntryWhereInput
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    cursor?: Maintenance_EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Maintenance_EntryScalarFieldEnum | Maintenance_EntryScalarFieldEnum[]
  }

  /**
   * Maintenance_Item without action
   */
  export type Maintenance_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
  }


  /**
   * Model Maintenance_Entry
   */

  export type AggregateMaintenance_Entry = {
    _count: Maintenance_EntryCountAggregateOutputType | null
    _avg: Maintenance_EntryAvgAggregateOutputType | null
    _sum: Maintenance_EntrySumAggregateOutputType | null
    _min: Maintenance_EntryMinAggregateOutputType | null
    _max: Maintenance_EntryMaxAggregateOutputType | null
  }

  export type Maintenance_EntryAvgAggregateOutputType = {
    id: number | null
    maintenance_ItemId: number | null
  }

  export type Maintenance_EntrySumAggregateOutputType = {
    id: number | null
    maintenance_ItemId: number | null
  }

  export type Maintenance_EntryMinAggregateOutputType = {
    id: number | null
    title: string | null
    details: string | null
    date: Date | null
    vehicleId: string | null
    maintenance_ItemId: number | null
  }

  export type Maintenance_EntryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    details: string | null
    date: Date | null
    vehicleId: string | null
    maintenance_ItemId: number | null
  }

  export type Maintenance_EntryCountAggregateOutputType = {
    id: number
    title: number
    details: number
    date: number
    vehicleId: number
    maintenance_ItemId: number
    _all: number
  }


  export type Maintenance_EntryAvgAggregateInputType = {
    id?: true
    maintenance_ItemId?: true
  }

  export type Maintenance_EntrySumAggregateInputType = {
    id?: true
    maintenance_ItemId?: true
  }

  export type Maintenance_EntryMinAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenance_ItemId?: true
  }

  export type Maintenance_EntryMaxAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenance_ItemId?: true
  }

  export type Maintenance_EntryCountAggregateInputType = {
    id?: true
    title?: true
    details?: true
    date?: true
    vehicleId?: true
    maintenance_ItemId?: true
    _all?: true
  }

  export type Maintenance_EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance_Entry to aggregate.
     */
    where?: Maintenance_EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Entries to fetch.
     */
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Maintenance_EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenance_Entries
    **/
    _count?: true | Maintenance_EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Maintenance_EntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Maintenance_EntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Maintenance_EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Maintenance_EntryMaxAggregateInputType
  }

  export type GetMaintenance_EntryAggregateType<T extends Maintenance_EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance_Entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance_Entry[P]>
      : GetScalarType<T[P], AggregateMaintenance_Entry[P]>
  }




  export type Maintenance_EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Maintenance_EntryWhereInput
    orderBy?: Maintenance_EntryOrderByWithAggregationInput | Maintenance_EntryOrderByWithAggregationInput[]
    by: Maintenance_EntryScalarFieldEnum[] | Maintenance_EntryScalarFieldEnum
    having?: Maintenance_EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Maintenance_EntryCountAggregateInputType | true
    _avg?: Maintenance_EntryAvgAggregateInputType
    _sum?: Maintenance_EntrySumAggregateInputType
    _min?: Maintenance_EntryMinAggregateInputType
    _max?: Maintenance_EntryMaxAggregateInputType
  }

  export type Maintenance_EntryGroupByOutputType = {
    id: number
    title: string
    details: string
    date: Date
    vehicleId: string
    maintenance_ItemId: number | null
    _count: Maintenance_EntryCountAggregateOutputType | null
    _avg: Maintenance_EntryAvgAggregateOutputType | null
    _sum: Maintenance_EntrySumAggregateOutputType | null
    _min: Maintenance_EntryMinAggregateOutputType | null
    _max: Maintenance_EntryMaxAggregateOutputType | null
  }

  type GetMaintenance_EntryGroupByPayload<T extends Maintenance_EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maintenance_EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Maintenance_EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Maintenance_EntryGroupByOutputType[P]>
            : GetScalarType<T[P], Maintenance_EntryGroupByOutputType[P]>
        }
      >
    >


  export type Maintenance_EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenance_ItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Entry"]>

  export type Maintenance_EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenance_ItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Entry"]>

  export type Maintenance_EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenance_ItemId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_Entry"]>

  export type Maintenance_EntrySelectScalar = {
    id?: boolean
    title?: boolean
    details?: boolean
    date?: boolean
    vehicleId?: boolean
    maintenance_ItemId?: boolean
  }

  export type Maintenance_EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "details" | "date" | "vehicleId" | "maintenance_ItemId", ExtArgs["result"]["maintenance_Entry"]>
  export type Maintenance_EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }
  export type Maintenance_EntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }
  export type Maintenance_EntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenance_item?: boolean | Maintenance_Entry$maintenance_itemArgs<ExtArgs>
  }

  export type $Maintenance_EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance_Entry"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      maintenance_item: Prisma.$Maintenance_ItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      details: string
      date: Date
      vehicleId: string
      maintenance_ItemId: number | null
    }, ExtArgs["result"]["maintenance_Entry"]>
    composites: {}
  }

  type Maintenance_EntryGetPayload<S extends boolean | null | undefined | Maintenance_EntryDefaultArgs> = $Result.GetResult<Prisma.$Maintenance_EntryPayload, S>

  type Maintenance_EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Maintenance_EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Maintenance_EntryCountAggregateInputType | true
    }

  export interface Maintenance_EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance_Entry'], meta: { name: 'Maintenance_Entry' } }
    /**
     * Find zero or one Maintenance_Entry that matches the filter.
     * @param {Maintenance_EntryFindUniqueArgs} args - Arguments to find a Maintenance_Entry
     * @example
     * // Get one Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Maintenance_EntryFindUniqueArgs>(args: SelectSubset<T, Maintenance_EntryFindUniqueArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance_Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Maintenance_EntryFindUniqueOrThrowArgs} args - Arguments to find a Maintenance_Entry
     * @example
     * // Get one Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Maintenance_EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, Maintenance_EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryFindFirstArgs} args - Arguments to find a Maintenance_Entry
     * @example
     * // Get one Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Maintenance_EntryFindFirstArgs>(args?: SelectSubset<T, Maintenance_EntryFindFirstArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryFindFirstOrThrowArgs} args - Arguments to find a Maintenance_Entry
     * @example
     * // Get one Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Maintenance_EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, Maintenance_EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenance_Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenance_Entries
     * const maintenance_Entries = await prisma.maintenance_Entry.findMany()
     * 
     * // Get first 10 Maintenance_Entries
     * const maintenance_Entries = await prisma.maintenance_Entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenance_EntryWithIdOnly = await prisma.maintenance_Entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Maintenance_EntryFindManyArgs>(args?: SelectSubset<T, Maintenance_EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance_Entry.
     * @param {Maintenance_EntryCreateArgs} args - Arguments to create a Maintenance_Entry.
     * @example
     * // Create one Maintenance_Entry
     * const Maintenance_Entry = await prisma.maintenance_Entry.create({
     *   data: {
     *     // ... data to create a Maintenance_Entry
     *   }
     * })
     * 
     */
    create<T extends Maintenance_EntryCreateArgs>(args: SelectSubset<T, Maintenance_EntryCreateArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenance_Entries.
     * @param {Maintenance_EntryCreateManyArgs} args - Arguments to create many Maintenance_Entries.
     * @example
     * // Create many Maintenance_Entries
     * const maintenance_Entry = await prisma.maintenance_Entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Maintenance_EntryCreateManyArgs>(args?: SelectSubset<T, Maintenance_EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenance_Entries and returns the data saved in the database.
     * @param {Maintenance_EntryCreateManyAndReturnArgs} args - Arguments to create many Maintenance_Entries.
     * @example
     * // Create many Maintenance_Entries
     * const maintenance_Entry = await prisma.maintenance_Entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenance_Entries and only return the `id`
     * const maintenance_EntryWithIdOnly = await prisma.maintenance_Entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Maintenance_EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, Maintenance_EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance_Entry.
     * @param {Maintenance_EntryDeleteArgs} args - Arguments to delete one Maintenance_Entry.
     * @example
     * // Delete one Maintenance_Entry
     * const Maintenance_Entry = await prisma.maintenance_Entry.delete({
     *   where: {
     *     // ... filter to delete one Maintenance_Entry
     *   }
     * })
     * 
     */
    delete<T extends Maintenance_EntryDeleteArgs>(args: SelectSubset<T, Maintenance_EntryDeleteArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance_Entry.
     * @param {Maintenance_EntryUpdateArgs} args - Arguments to update one Maintenance_Entry.
     * @example
     * // Update one Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Maintenance_EntryUpdateArgs>(args: SelectSubset<T, Maintenance_EntryUpdateArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenance_Entries.
     * @param {Maintenance_EntryDeleteManyArgs} args - Arguments to filter Maintenance_Entries to delete.
     * @example
     * // Delete a few Maintenance_Entries
     * const { count } = await prisma.maintenance_Entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Maintenance_EntryDeleteManyArgs>(args?: SelectSubset<T, Maintenance_EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenance_Entries
     * const maintenance_Entry = await prisma.maintenance_Entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Maintenance_EntryUpdateManyArgs>(args: SelectSubset<T, Maintenance_EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_Entries and returns the data updated in the database.
     * @param {Maintenance_EntryUpdateManyAndReturnArgs} args - Arguments to update many Maintenance_Entries.
     * @example
     * // Update many Maintenance_Entries
     * const maintenance_Entry = await prisma.maintenance_Entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenance_Entries and only return the `id`
     * const maintenance_EntryWithIdOnly = await prisma.maintenance_Entry.updateManyAndReturn({
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
    updateManyAndReturn<T extends Maintenance_EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, Maintenance_EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance_Entry.
     * @param {Maintenance_EntryUpsertArgs} args - Arguments to update or create a Maintenance_Entry.
     * @example
     * // Update or create a Maintenance_Entry
     * const maintenance_Entry = await prisma.maintenance_Entry.upsert({
     *   create: {
     *     // ... data to create a Maintenance_Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance_Entry we want to update
     *   }
     * })
     */
    upsert<T extends Maintenance_EntryUpsertArgs>(args: SelectSubset<T, Maintenance_EntryUpsertArgs<ExtArgs>>): Prisma__Maintenance_EntryClient<$Result.GetResult<Prisma.$Maintenance_EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenance_Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryCountArgs} args - Arguments to filter Maintenance_Entries to count.
     * @example
     * // Count the number of Maintenance_Entries
     * const count = await prisma.maintenance_Entry.count({
     *   where: {
     *     // ... the filter for the Maintenance_Entries we want to count
     *   }
     * })
    **/
    count<T extends Maintenance_EntryCountArgs>(
      args?: Subset<T, Maintenance_EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maintenance_EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance_Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Maintenance_EntryAggregateArgs>(args: Subset<T, Maintenance_EntryAggregateArgs>): Prisma.PrismaPromise<GetMaintenance_EntryAggregateType<T>>

    /**
     * Group by Maintenance_Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_EntryGroupByArgs} args - Group by arguments.
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
      T extends Maintenance_EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Maintenance_EntryGroupByArgs['orderBy'] }
        : { orderBy?: Maintenance_EntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Maintenance_EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenance_EntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance_Entry model
   */
  readonly fields: Maintenance_EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance_Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Maintenance_EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maintenance_item<T extends Maintenance_Entry$maintenance_itemArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance_Entry$maintenance_itemArgs<ExtArgs>>): Prisma__Maintenance_ItemClient<$Result.GetResult<Prisma.$Maintenance_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Maintenance_Entry model
   */
  interface Maintenance_EntryFieldRefs {
    readonly id: FieldRef<"Maintenance_Entry", 'Int'>
    readonly title: FieldRef<"Maintenance_Entry", 'String'>
    readonly details: FieldRef<"Maintenance_Entry", 'String'>
    readonly date: FieldRef<"Maintenance_Entry", 'DateTime'>
    readonly vehicleId: FieldRef<"Maintenance_Entry", 'String'>
    readonly maintenance_ItemId: FieldRef<"Maintenance_Entry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance_Entry findUnique
   */
  export type Maintenance_EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Entry to fetch.
     */
    where: Maintenance_EntryWhereUniqueInput
  }

  /**
   * Maintenance_Entry findUniqueOrThrow
   */
  export type Maintenance_EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Entry to fetch.
     */
    where: Maintenance_EntryWhereUniqueInput
  }

  /**
   * Maintenance_Entry findFirst
   */
  export type Maintenance_EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Entry to fetch.
     */
    where?: Maintenance_EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Entries to fetch.
     */
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenance_Entries.
     */
    cursor?: Maintenance_EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenance_Entries.
     */
    distinct?: Maintenance_EntryScalarFieldEnum | Maintenance_EntryScalarFieldEnum[]
  }

  /**
   * Maintenance_Entry findFirstOrThrow
   */
  export type Maintenance_EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Entry to fetch.
     */
    where?: Maintenance_EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Entries to fetch.
     */
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenance_Entries.
     */
    cursor?: Maintenance_EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenance_Entries.
     */
    distinct?: Maintenance_EntryScalarFieldEnum | Maintenance_EntryScalarFieldEnum[]
  }

  /**
   * Maintenance_Entry findMany
   */
  export type Maintenance_EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance_Entries to fetch.
     */
    where?: Maintenance_EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenance_Entries to fetch.
     */
    orderBy?: Maintenance_EntryOrderByWithRelationInput | Maintenance_EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenance_Entries.
     */
    cursor?: Maintenance_EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenance_Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenance_Entries.
     */
    skip?: number
    distinct?: Maintenance_EntryScalarFieldEnum | Maintenance_EntryScalarFieldEnum[]
  }

  /**
   * Maintenance_Entry create
   */
  export type Maintenance_EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance_Entry.
     */
    data: XOR<Maintenance_EntryCreateInput, Maintenance_EntryUncheckedCreateInput>
  }

  /**
   * Maintenance_Entry createMany
   */
  export type Maintenance_EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenance_Entries.
     */
    data: Maintenance_EntryCreateManyInput | Maintenance_EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance_Entry createManyAndReturn
   */
  export type Maintenance_EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenance_Entries.
     */
    data: Maintenance_EntryCreateManyInput | Maintenance_EntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance_Entry update
   */
  export type Maintenance_EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance_Entry.
     */
    data: XOR<Maintenance_EntryUpdateInput, Maintenance_EntryUncheckedUpdateInput>
    /**
     * Choose, which Maintenance_Entry to update.
     */
    where: Maintenance_EntryWhereUniqueInput
  }

  /**
   * Maintenance_Entry updateMany
   */
  export type Maintenance_EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenance_Entries.
     */
    data: XOR<Maintenance_EntryUpdateManyMutationInput, Maintenance_EntryUncheckedUpdateManyInput>
    /**
     * Filter which Maintenance_Entries to update
     */
    where?: Maintenance_EntryWhereInput
    /**
     * Limit how many Maintenance_Entries to update.
     */
    limit?: number
  }

  /**
   * Maintenance_Entry updateManyAndReturn
   */
  export type Maintenance_EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * The data used to update Maintenance_Entries.
     */
    data: XOR<Maintenance_EntryUpdateManyMutationInput, Maintenance_EntryUncheckedUpdateManyInput>
    /**
     * Filter which Maintenance_Entries to update
     */
    where?: Maintenance_EntryWhereInput
    /**
     * Limit how many Maintenance_Entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance_Entry upsert
   */
  export type Maintenance_EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance_Entry to update in case it exists.
     */
    where: Maintenance_EntryWhereUniqueInput
    /**
     * In case the Maintenance_Entry found by the `where` argument doesn't exist, create a new Maintenance_Entry with this data.
     */
    create: XOR<Maintenance_EntryCreateInput, Maintenance_EntryUncheckedCreateInput>
    /**
     * In case the Maintenance_Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Maintenance_EntryUpdateInput, Maintenance_EntryUncheckedUpdateInput>
  }

  /**
   * Maintenance_Entry delete
   */
  export type Maintenance_EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
    /**
     * Filter which Maintenance_Entry to delete.
     */
    where: Maintenance_EntryWhereUniqueInput
  }

  /**
   * Maintenance_Entry deleteMany
   */
  export type Maintenance_EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance_Entries to delete
     */
    where?: Maintenance_EntryWhereInput
    /**
     * Limit how many Maintenance_Entries to delete.
     */
    limit?: number
  }

  /**
   * Maintenance_Entry.maintenance_item
   */
  export type Maintenance_Entry$maintenance_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Item
     */
    select?: Maintenance_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Item
     */
    omit?: Maintenance_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_ItemInclude<ExtArgs> | null
    where?: Maintenance_ItemWhereInput
  }

  /**
   * Maintenance_Entry without action
   */
  export type Maintenance_EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance_Entry
     */
    select?: Maintenance_EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance_Entry
     */
    omit?: Maintenance_EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Maintenance_EntryInclude<ExtArgs> | null
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
    odometer_miles: 'odometer_miles',
    userId: 'userId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const Maintenance_ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    comments: 'comments',
    time_interval_days: 'time_interval_days',
    usage_interval_miles: 'usage_interval_miles',
    recurring: 'recurring',
    vehicleId: 'vehicleId'
  };

  export type Maintenance_ItemScalarFieldEnum = (typeof Maintenance_ItemScalarFieldEnum)[keyof typeof Maintenance_ItemScalarFieldEnum]


  export const Maintenance_EntryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    details: 'details',
    date: 'date',
    vehicleId: 'vehicleId',
    maintenance_ItemId: 'maintenance_ItemId'
  };

  export type Maintenance_EntryScalarFieldEnum = (typeof Maintenance_EntryScalarFieldEnum)[keyof typeof Maintenance_EntryScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    odometer_miles?: IntNullableFilter<"Vehicle"> | number | null
    userId?: StringFilter<"Vehicle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    Maintenance_Item?: Maintenance_ItemListRelationFilter
    Maintenance_Entry?: Maintenance_EntryListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    odometer_miles?: SortOrderInput | SortOrder
    userId?: SortOrder
    owner?: UserOrderByWithRelationInput
    Maintenance_Item?: Maintenance_ItemOrderByRelationAggregateInput
    Maintenance_Entry?: Maintenance_EntryOrderByRelationAggregateInput
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
    odometer_miles?: IntNullableFilter<"Vehicle"> | number | null
    userId?: StringFilter<"Vehicle"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    Maintenance_Item?: Maintenance_ItemListRelationFilter
    Maintenance_Entry?: Maintenance_EntryListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    odometer_miles?: SortOrderInput | SortOrder
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
    odometer_miles?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type Maintenance_ItemWhereInput = {
    AND?: Maintenance_ItemWhereInput | Maintenance_ItemWhereInput[]
    OR?: Maintenance_ItemWhereInput[]
    NOT?: Maintenance_ItemWhereInput | Maintenance_ItemWhereInput[]
    id?: IntFilter<"Maintenance_Item"> | number
    name?: StringFilter<"Maintenance_Item"> | string
    comments?: StringNullableFilter<"Maintenance_Item"> | string | null
    time_interval_days?: IntNullableFilter<"Maintenance_Item"> | number | null
    usage_interval_miles?: FloatNullableFilter<"Maintenance_Item"> | number | null
    recurring?: BoolFilter<"Maintenance_Item"> | boolean
    vehicleId?: StringFilter<"Maintenance_Item"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    Maintenance_Entry?: Maintenance_EntryListRelationFilter
  }

  export type Maintenance_ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrderInput | SortOrder
    time_interval_days?: SortOrderInput | SortOrder
    usage_interval_miles?: SortOrderInput | SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    Maintenance_Entry?: Maintenance_EntryOrderByRelationAggregateInput
  }

  export type Maintenance_ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Maintenance_ItemWhereInput | Maintenance_ItemWhereInput[]
    OR?: Maintenance_ItemWhereInput[]
    NOT?: Maintenance_ItemWhereInput | Maintenance_ItemWhereInput[]
    name?: StringFilter<"Maintenance_Item"> | string
    comments?: StringNullableFilter<"Maintenance_Item"> | string | null
    time_interval_days?: IntNullableFilter<"Maintenance_Item"> | number | null
    usage_interval_miles?: FloatNullableFilter<"Maintenance_Item"> | number | null
    recurring?: BoolFilter<"Maintenance_Item"> | boolean
    vehicleId?: StringFilter<"Maintenance_Item"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    Maintenance_Entry?: Maintenance_EntryListRelationFilter
  }, "id">

  export type Maintenance_ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrderInput | SortOrder
    time_interval_days?: SortOrderInput | SortOrder
    usage_interval_miles?: SortOrderInput | SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
    _count?: Maintenance_ItemCountOrderByAggregateInput
    _avg?: Maintenance_ItemAvgOrderByAggregateInput
    _max?: Maintenance_ItemMaxOrderByAggregateInput
    _min?: Maintenance_ItemMinOrderByAggregateInput
    _sum?: Maintenance_ItemSumOrderByAggregateInput
  }

  export type Maintenance_ItemScalarWhereWithAggregatesInput = {
    AND?: Maintenance_ItemScalarWhereWithAggregatesInput | Maintenance_ItemScalarWhereWithAggregatesInput[]
    OR?: Maintenance_ItemScalarWhereWithAggregatesInput[]
    NOT?: Maintenance_ItemScalarWhereWithAggregatesInput | Maintenance_ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maintenance_Item"> | number
    name?: StringWithAggregatesFilter<"Maintenance_Item"> | string
    comments?: StringNullableWithAggregatesFilter<"Maintenance_Item"> | string | null
    time_interval_days?: IntNullableWithAggregatesFilter<"Maintenance_Item"> | number | null
    usage_interval_miles?: FloatNullableWithAggregatesFilter<"Maintenance_Item"> | number | null
    recurring?: BoolWithAggregatesFilter<"Maintenance_Item"> | boolean
    vehicleId?: StringWithAggregatesFilter<"Maintenance_Item"> | string
  }

  export type Maintenance_EntryWhereInput = {
    AND?: Maintenance_EntryWhereInput | Maintenance_EntryWhereInput[]
    OR?: Maintenance_EntryWhereInput[]
    NOT?: Maintenance_EntryWhereInput | Maintenance_EntryWhereInput[]
    id?: IntFilter<"Maintenance_Entry"> | number
    title?: StringFilter<"Maintenance_Entry"> | string
    details?: StringFilter<"Maintenance_Entry"> | string
    date?: DateTimeFilter<"Maintenance_Entry"> | Date | string
    vehicleId?: StringFilter<"Maintenance_Entry"> | string
    maintenance_ItemId?: IntNullableFilter<"Maintenance_Entry"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    maintenance_item?: XOR<Maintenance_ItemNullableScalarRelationFilter, Maintenance_ItemWhereInput> | null
  }

  export type Maintenance_EntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenance_ItemId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    maintenance_item?: Maintenance_ItemOrderByWithRelationInput
  }

  export type Maintenance_EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Maintenance_EntryWhereInput | Maintenance_EntryWhereInput[]
    OR?: Maintenance_EntryWhereInput[]
    NOT?: Maintenance_EntryWhereInput | Maintenance_EntryWhereInput[]
    title?: StringFilter<"Maintenance_Entry"> | string
    details?: StringFilter<"Maintenance_Entry"> | string
    date?: DateTimeFilter<"Maintenance_Entry"> | Date | string
    vehicleId?: StringFilter<"Maintenance_Entry"> | string
    maintenance_ItemId?: IntNullableFilter<"Maintenance_Entry"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    maintenance_item?: XOR<Maintenance_ItemNullableScalarRelationFilter, Maintenance_ItemWhereInput> | null
  }, "id">

  export type Maintenance_EntryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenance_ItemId?: SortOrderInput | SortOrder
    _count?: Maintenance_EntryCountOrderByAggregateInput
    _avg?: Maintenance_EntryAvgOrderByAggregateInput
    _max?: Maintenance_EntryMaxOrderByAggregateInput
    _min?: Maintenance_EntryMinOrderByAggregateInput
    _sum?: Maintenance_EntrySumOrderByAggregateInput
  }

  export type Maintenance_EntryScalarWhereWithAggregatesInput = {
    AND?: Maintenance_EntryScalarWhereWithAggregatesInput | Maintenance_EntryScalarWhereWithAggregatesInput[]
    OR?: Maintenance_EntryScalarWhereWithAggregatesInput[]
    NOT?: Maintenance_EntryScalarWhereWithAggregatesInput | Maintenance_EntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maintenance_Entry"> | number
    title?: StringWithAggregatesFilter<"Maintenance_Entry"> | string
    details?: StringWithAggregatesFilter<"Maintenance_Entry"> | string
    date?: DateTimeWithAggregatesFilter<"Maintenance_Entry"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"Maintenance_Entry"> | string
    maintenance_ItemId?: IntNullableWithAggregatesFilter<"Maintenance_Entry"> | number | null
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
    odometer_miles?: number | null
    owner: UserCreateNestedOneWithoutVehicleInput
    Maintenance_Item?: Maintenance_ItemCreateNestedManyWithoutVehicleInput
    Maintenance_Entry?: Maintenance_EntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    userId: string
    Maintenance_Item?: Maintenance_ItemUncheckedCreateNestedManyWithoutVehicleInput
    Maintenance_Entry?: Maintenance_EntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    Maintenance_Item?: Maintenance_ItemUpdateManyWithoutVehicleNestedInput
    Maintenance_Entry?: Maintenance_EntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    Maintenance_Item?: Maintenance_ItemUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenance_Entry?: Maintenance_EntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    userId: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Maintenance_ItemCreateInput = {
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    vehicle: VehicleCreateNestedOneWithoutMaintenance_ItemInput
    Maintenance_Entry?: Maintenance_EntryCreateNestedManyWithoutMaintenance_itemInput
  }

  export type Maintenance_ItemUncheckedCreateInput = {
    id?: number
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    vehicleId: string
    Maintenance_Entry?: Maintenance_EntryUncheckedCreateNestedManyWithoutMaintenance_itemInput
  }

  export type Maintenance_ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenance_ItemNestedInput
    Maintenance_Entry?: Maintenance_EntryUpdateManyWithoutMaintenance_itemNestedInput
  }

  export type Maintenance_ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
    Maintenance_Entry?: Maintenance_EntryUncheckedUpdateManyWithoutMaintenance_itemNestedInput
  }

  export type Maintenance_ItemCreateManyInput = {
    id?: number
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    vehicleId: string
  }

  export type Maintenance_ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Maintenance_ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type Maintenance_EntryCreateInput = {
    title: string
    details: string
    date: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenance_EntryInput
    maintenance_item?: Maintenance_ItemCreateNestedOneWithoutMaintenance_EntryInput
  }

  export type Maintenance_EntryUncheckedCreateInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
    maintenance_ItemId?: number | null
  }

  export type Maintenance_EntryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenance_EntryNestedInput
    maintenance_item?: Maintenance_ItemUpdateOneWithoutMaintenance_EntryNestedInput
  }

  export type Maintenance_EntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenance_ItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Maintenance_EntryCreateManyInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
    maintenance_ItemId?: number | null
  }

  export type Maintenance_EntryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Maintenance_EntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenance_ItemId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Maintenance_ItemListRelationFilter = {
    every?: Maintenance_ItemWhereInput
    some?: Maintenance_ItemWhereInput
    none?: Maintenance_ItemWhereInput
  }

  export type Maintenance_EntryListRelationFilter = {
    every?: Maintenance_EntryWhereInput
    some?: Maintenance_EntryWhereInput
    none?: Maintenance_EntryWhereInput
  }

  export type Maintenance_ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Maintenance_EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer_miles?: SortOrder
    userId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    odometer_miles?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer_miles?: SortOrder
    userId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    make?: SortOrder
    year?: SortOrder
    odometer_miles?: SortOrder
    userId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    odometer_miles?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type Maintenance_ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    time_interval_days?: SortOrder
    usage_interval_miles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type Maintenance_ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    time_interval_days?: SortOrder
    usage_interval_miles?: SortOrder
  }

  export type Maintenance_ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    time_interval_days?: SortOrder
    usage_interval_miles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type Maintenance_ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    comments?: SortOrder
    time_interval_days?: SortOrder
    usage_interval_miles?: SortOrder
    recurring?: SortOrder
    vehicleId?: SortOrder
  }

  export type Maintenance_ItemSumOrderByAggregateInput = {
    id?: SortOrder
    time_interval_days?: SortOrder
    usage_interval_miles?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type Maintenance_ItemNullableScalarRelationFilter = {
    is?: Maintenance_ItemWhereInput | null
    isNot?: Maintenance_ItemWhereInput | null
  }

  export type Maintenance_EntryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenance_ItemId?: SortOrder
  }

  export type Maintenance_EntryAvgOrderByAggregateInput = {
    id?: SortOrder
    maintenance_ItemId?: SortOrder
  }

  export type Maintenance_EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenance_ItemId?: SortOrder
  }

  export type Maintenance_EntryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    date?: SortOrder
    vehicleId?: SortOrder
    maintenance_ItemId?: SortOrder
  }

  export type Maintenance_EntrySumOrderByAggregateInput = {
    id?: SortOrder
    maintenance_ItemId?: SortOrder
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

  export type Maintenance_ItemCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput> | Maintenance_ItemCreateWithoutVehicleInput[] | Maintenance_ItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutVehicleInput | Maintenance_ItemCreateOrConnectWithoutVehicleInput[]
    createMany?: Maintenance_ItemCreateManyVehicleInputEnvelope
    connect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
  }

  export type Maintenance_EntryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput> | Maintenance_EntryCreateWithoutVehicleInput[] | Maintenance_EntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutVehicleInput | Maintenance_EntryCreateOrConnectWithoutVehicleInput[]
    createMany?: Maintenance_EntryCreateManyVehicleInputEnvelope
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
  }

  export type Maintenance_ItemUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput> | Maintenance_ItemCreateWithoutVehicleInput[] | Maintenance_ItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutVehicleInput | Maintenance_ItemCreateOrConnectWithoutVehicleInput[]
    createMany?: Maintenance_ItemCreateManyVehicleInputEnvelope
    connect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
  }

  export type Maintenance_EntryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput> | Maintenance_EntryCreateWithoutVehicleInput[] | Maintenance_EntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutVehicleInput | Maintenance_EntryCreateOrConnectWithoutVehicleInput[]
    createMany?: Maintenance_EntryCreateManyVehicleInputEnvelope
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleInput
    upsert?: UserUpsertWithoutVehicleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehicleInput, UserUpdateWithoutVehicleInput>, UserUncheckedUpdateWithoutVehicleInput>
  }

  export type Maintenance_ItemUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput> | Maintenance_ItemCreateWithoutVehicleInput[] | Maintenance_ItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutVehicleInput | Maintenance_ItemCreateOrConnectWithoutVehicleInput[]
    upsert?: Maintenance_ItemUpsertWithWhereUniqueWithoutVehicleInput | Maintenance_ItemUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: Maintenance_ItemCreateManyVehicleInputEnvelope
    set?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    disconnect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    delete?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    connect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    update?: Maintenance_ItemUpdateWithWhereUniqueWithoutVehicleInput | Maintenance_ItemUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: Maintenance_ItemUpdateManyWithWhereWithoutVehicleInput | Maintenance_ItemUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: Maintenance_ItemScalarWhereInput | Maintenance_ItemScalarWhereInput[]
  }

  export type Maintenance_EntryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput> | Maintenance_EntryCreateWithoutVehicleInput[] | Maintenance_EntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutVehicleInput | Maintenance_EntryCreateOrConnectWithoutVehicleInput[]
    upsert?: Maintenance_EntryUpsertWithWhereUniqueWithoutVehicleInput | Maintenance_EntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: Maintenance_EntryCreateManyVehicleInputEnvelope
    set?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    disconnect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    delete?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    update?: Maintenance_EntryUpdateWithWhereUniqueWithoutVehicleInput | Maintenance_EntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: Maintenance_EntryUpdateManyWithWhereWithoutVehicleInput | Maintenance_EntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
  }

  export type Maintenance_ItemUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput> | Maintenance_ItemCreateWithoutVehicleInput[] | Maintenance_ItemUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutVehicleInput | Maintenance_ItemCreateOrConnectWithoutVehicleInput[]
    upsert?: Maintenance_ItemUpsertWithWhereUniqueWithoutVehicleInput | Maintenance_ItemUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: Maintenance_ItemCreateManyVehicleInputEnvelope
    set?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    disconnect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    delete?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    connect?: Maintenance_ItemWhereUniqueInput | Maintenance_ItemWhereUniqueInput[]
    update?: Maintenance_ItemUpdateWithWhereUniqueWithoutVehicleInput | Maintenance_ItemUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: Maintenance_ItemUpdateManyWithWhereWithoutVehicleInput | Maintenance_ItemUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: Maintenance_ItemScalarWhereInput | Maintenance_ItemScalarWhereInput[]
  }

  export type Maintenance_EntryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput> | Maintenance_EntryCreateWithoutVehicleInput[] | Maintenance_EntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutVehicleInput | Maintenance_EntryCreateOrConnectWithoutVehicleInput[]
    upsert?: Maintenance_EntryUpsertWithWhereUniqueWithoutVehicleInput | Maintenance_EntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: Maintenance_EntryCreateManyVehicleInputEnvelope
    set?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    disconnect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    delete?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    update?: Maintenance_EntryUpdateWithWhereUniqueWithoutVehicleInput | Maintenance_EntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: Maintenance_EntryUpdateManyWithWhereWithoutVehicleInput | Maintenance_EntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenance_ItemInput = {
    create?: XOR<VehicleCreateWithoutMaintenance_ItemInput, VehicleUncheckedCreateWithoutMaintenance_ItemInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenance_ItemInput
    connect?: VehicleWhereUniqueInput
  }

  export type Maintenance_EntryCreateNestedManyWithoutMaintenance_itemInput = {
    create?: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput> | Maintenance_EntryCreateWithoutMaintenance_itemInput[] | Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput | Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput[]
    createMany?: Maintenance_EntryCreateManyMaintenance_itemInputEnvelope
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
  }

  export type Maintenance_EntryUncheckedCreateNestedManyWithoutMaintenance_itemInput = {
    create?: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput> | Maintenance_EntryCreateWithoutMaintenance_itemInput[] | Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput | Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput[]
    createMany?: Maintenance_EntryCreateManyMaintenance_itemInputEnvelope
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VehicleUpdateOneRequiredWithoutMaintenance_ItemNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenance_ItemInput, VehicleUncheckedCreateWithoutMaintenance_ItemInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenance_ItemInput
    upsert?: VehicleUpsertWithoutMaintenance_ItemInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenance_ItemInput, VehicleUpdateWithoutMaintenance_ItemInput>, VehicleUncheckedUpdateWithoutMaintenance_ItemInput>
  }

  export type Maintenance_EntryUpdateManyWithoutMaintenance_itemNestedInput = {
    create?: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput> | Maintenance_EntryCreateWithoutMaintenance_itemInput[] | Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput | Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput[]
    upsert?: Maintenance_EntryUpsertWithWhereUniqueWithoutMaintenance_itemInput | Maintenance_EntryUpsertWithWhereUniqueWithoutMaintenance_itemInput[]
    createMany?: Maintenance_EntryCreateManyMaintenance_itemInputEnvelope
    set?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    disconnect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    delete?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    update?: Maintenance_EntryUpdateWithWhereUniqueWithoutMaintenance_itemInput | Maintenance_EntryUpdateWithWhereUniqueWithoutMaintenance_itemInput[]
    updateMany?: Maintenance_EntryUpdateManyWithWhereWithoutMaintenance_itemInput | Maintenance_EntryUpdateManyWithWhereWithoutMaintenance_itemInput[]
    deleteMany?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Maintenance_EntryUncheckedUpdateManyWithoutMaintenance_itemNestedInput = {
    create?: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput> | Maintenance_EntryCreateWithoutMaintenance_itemInput[] | Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput[]
    connectOrCreate?: Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput | Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput[]
    upsert?: Maintenance_EntryUpsertWithWhereUniqueWithoutMaintenance_itemInput | Maintenance_EntryUpsertWithWhereUniqueWithoutMaintenance_itemInput[]
    createMany?: Maintenance_EntryCreateManyMaintenance_itemInputEnvelope
    set?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    disconnect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    delete?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    connect?: Maintenance_EntryWhereUniqueInput | Maintenance_EntryWhereUniqueInput[]
    update?: Maintenance_EntryUpdateWithWhereUniqueWithoutMaintenance_itemInput | Maintenance_EntryUpdateWithWhereUniqueWithoutMaintenance_itemInput[]
    updateMany?: Maintenance_EntryUpdateManyWithWhereWithoutMaintenance_itemInput | Maintenance_EntryUpdateManyWithWhereWithoutMaintenance_itemInput[]
    deleteMany?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenance_EntryInput = {
    create?: XOR<VehicleCreateWithoutMaintenance_EntryInput, VehicleUncheckedCreateWithoutMaintenance_EntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenance_EntryInput
    connect?: VehicleWhereUniqueInput
  }

  export type Maintenance_ItemCreateNestedOneWithoutMaintenance_EntryInput = {
    create?: XOR<Maintenance_ItemCreateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedCreateWithoutMaintenance_EntryInput>
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutMaintenance_EntryInput
    connect?: Maintenance_ItemWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateOneRequiredWithoutMaintenance_EntryNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenance_EntryInput, VehicleUncheckedCreateWithoutMaintenance_EntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenance_EntryInput
    upsert?: VehicleUpsertWithoutMaintenance_EntryInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenance_EntryInput, VehicleUpdateWithoutMaintenance_EntryInput>, VehicleUncheckedUpdateWithoutMaintenance_EntryInput>
  }

  export type Maintenance_ItemUpdateOneWithoutMaintenance_EntryNestedInput = {
    create?: XOR<Maintenance_ItemCreateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedCreateWithoutMaintenance_EntryInput>
    connectOrCreate?: Maintenance_ItemCreateOrConnectWithoutMaintenance_EntryInput
    upsert?: Maintenance_ItemUpsertWithoutMaintenance_EntryInput
    disconnect?: Maintenance_ItemWhereInput | boolean
    delete?: Maintenance_ItemWhereInput | boolean
    connect?: Maintenance_ItemWhereUniqueInput
    update?: XOR<XOR<Maintenance_ItemUpdateToOneWithWhereWithoutMaintenance_EntryInput, Maintenance_ItemUpdateWithoutMaintenance_EntryInput>, Maintenance_ItemUncheckedUpdateWithoutMaintenance_EntryInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    odometer_miles?: number | null
    Maintenance_Item?: Maintenance_ItemCreateNestedManyWithoutVehicleInput
    Maintenance_Entry?: Maintenance_EntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    Maintenance_Item?: Maintenance_ItemUncheckedCreateNestedManyWithoutVehicleInput
    Maintenance_Entry?: Maintenance_EntryUncheckedCreateNestedManyWithoutVehicleInput
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
    odometer_miles?: IntNullableFilter<"Vehicle"> | number | null
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

  export type Maintenance_ItemCreateWithoutVehicleInput = {
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    Maintenance_Entry?: Maintenance_EntryCreateNestedManyWithoutMaintenance_itemInput
  }

  export type Maintenance_ItemUncheckedCreateWithoutVehicleInput = {
    id?: number
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    Maintenance_Entry?: Maintenance_EntryUncheckedCreateNestedManyWithoutMaintenance_itemInput
  }

  export type Maintenance_ItemCreateOrConnectWithoutVehicleInput = {
    where: Maintenance_ItemWhereUniqueInput
    create: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput>
  }

  export type Maintenance_ItemCreateManyVehicleInputEnvelope = {
    data: Maintenance_ItemCreateManyVehicleInput | Maintenance_ItemCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type Maintenance_EntryCreateWithoutVehicleInput = {
    title: string
    details: string
    date: Date | string
    maintenance_item?: Maintenance_ItemCreateNestedOneWithoutMaintenance_EntryInput
  }

  export type Maintenance_EntryUncheckedCreateWithoutVehicleInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    maintenance_ItemId?: number | null
  }

  export type Maintenance_EntryCreateOrConnectWithoutVehicleInput = {
    where: Maintenance_EntryWhereUniqueInput
    create: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput>
  }

  export type Maintenance_EntryCreateManyVehicleInputEnvelope = {
    data: Maintenance_EntryCreateManyVehicleInput | Maintenance_EntryCreateManyVehicleInput[]
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

  export type Maintenance_ItemUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Maintenance_ItemWhereUniqueInput
    update: XOR<Maintenance_ItemUpdateWithoutVehicleInput, Maintenance_ItemUncheckedUpdateWithoutVehicleInput>
    create: XOR<Maintenance_ItemCreateWithoutVehicleInput, Maintenance_ItemUncheckedCreateWithoutVehicleInput>
  }

  export type Maintenance_ItemUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Maintenance_ItemWhereUniqueInput
    data: XOR<Maintenance_ItemUpdateWithoutVehicleInput, Maintenance_ItemUncheckedUpdateWithoutVehicleInput>
  }

  export type Maintenance_ItemUpdateManyWithWhereWithoutVehicleInput = {
    where: Maintenance_ItemScalarWhereInput
    data: XOR<Maintenance_ItemUpdateManyMutationInput, Maintenance_ItemUncheckedUpdateManyWithoutVehicleInput>
  }

  export type Maintenance_ItemScalarWhereInput = {
    AND?: Maintenance_ItemScalarWhereInput | Maintenance_ItemScalarWhereInput[]
    OR?: Maintenance_ItemScalarWhereInput[]
    NOT?: Maintenance_ItemScalarWhereInput | Maintenance_ItemScalarWhereInput[]
    id?: IntFilter<"Maintenance_Item"> | number
    name?: StringFilter<"Maintenance_Item"> | string
    comments?: StringNullableFilter<"Maintenance_Item"> | string | null
    time_interval_days?: IntNullableFilter<"Maintenance_Item"> | number | null
    usage_interval_miles?: FloatNullableFilter<"Maintenance_Item"> | number | null
    recurring?: BoolFilter<"Maintenance_Item"> | boolean
    vehicleId?: StringFilter<"Maintenance_Item"> | string
  }

  export type Maintenance_EntryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Maintenance_EntryWhereUniqueInput
    update: XOR<Maintenance_EntryUpdateWithoutVehicleInput, Maintenance_EntryUncheckedUpdateWithoutVehicleInput>
    create: XOR<Maintenance_EntryCreateWithoutVehicleInput, Maintenance_EntryUncheckedCreateWithoutVehicleInput>
  }

  export type Maintenance_EntryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Maintenance_EntryWhereUniqueInput
    data: XOR<Maintenance_EntryUpdateWithoutVehicleInput, Maintenance_EntryUncheckedUpdateWithoutVehicleInput>
  }

  export type Maintenance_EntryUpdateManyWithWhereWithoutVehicleInput = {
    where: Maintenance_EntryScalarWhereInput
    data: XOR<Maintenance_EntryUpdateManyMutationInput, Maintenance_EntryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type Maintenance_EntryScalarWhereInput = {
    AND?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
    OR?: Maintenance_EntryScalarWhereInput[]
    NOT?: Maintenance_EntryScalarWhereInput | Maintenance_EntryScalarWhereInput[]
    id?: IntFilter<"Maintenance_Entry"> | number
    title?: StringFilter<"Maintenance_Entry"> | string
    details?: StringFilter<"Maintenance_Entry"> | string
    date?: DateTimeFilter<"Maintenance_Entry"> | Date | string
    vehicleId?: StringFilter<"Maintenance_Entry"> | string
    maintenance_ItemId?: IntNullableFilter<"Maintenance_Entry"> | number | null
  }

  export type VehicleCreateWithoutMaintenance_ItemInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    owner: UserCreateNestedOneWithoutVehicleInput
    Maintenance_Entry?: Maintenance_EntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenance_ItemInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    userId: string
    Maintenance_Entry?: Maintenance_EntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenance_ItemInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenance_ItemInput, VehicleUncheckedCreateWithoutMaintenance_ItemInput>
  }

  export type Maintenance_EntryCreateWithoutMaintenance_itemInput = {
    title: string
    details: string
    date: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenance_EntryInput
  }

  export type Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
  }

  export type Maintenance_EntryCreateOrConnectWithoutMaintenance_itemInput = {
    where: Maintenance_EntryWhereUniqueInput
    create: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput>
  }

  export type Maintenance_EntryCreateManyMaintenance_itemInputEnvelope = {
    data: Maintenance_EntryCreateManyMaintenance_itemInput | Maintenance_EntryCreateManyMaintenance_itemInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutMaintenance_ItemInput = {
    update: XOR<VehicleUpdateWithoutMaintenance_ItemInput, VehicleUncheckedUpdateWithoutMaintenance_ItemInput>
    create: XOR<VehicleCreateWithoutMaintenance_ItemInput, VehicleUncheckedCreateWithoutMaintenance_ItemInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenance_ItemInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenance_ItemInput, VehicleUncheckedUpdateWithoutMaintenance_ItemInput>
  }

  export type VehicleUpdateWithoutMaintenance_ItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    Maintenance_Entry?: Maintenance_EntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenance_ItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    Maintenance_Entry?: Maintenance_EntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type Maintenance_EntryUpsertWithWhereUniqueWithoutMaintenance_itemInput = {
    where: Maintenance_EntryWhereUniqueInput
    update: XOR<Maintenance_EntryUpdateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedUpdateWithoutMaintenance_itemInput>
    create: XOR<Maintenance_EntryCreateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedCreateWithoutMaintenance_itemInput>
  }

  export type Maintenance_EntryUpdateWithWhereUniqueWithoutMaintenance_itemInput = {
    where: Maintenance_EntryWhereUniqueInput
    data: XOR<Maintenance_EntryUpdateWithoutMaintenance_itemInput, Maintenance_EntryUncheckedUpdateWithoutMaintenance_itemInput>
  }

  export type Maintenance_EntryUpdateManyWithWhereWithoutMaintenance_itemInput = {
    where: Maintenance_EntryScalarWhereInput
    data: XOR<Maintenance_EntryUpdateManyMutationInput, Maintenance_EntryUncheckedUpdateManyWithoutMaintenance_itemInput>
  }

  export type VehicleCreateWithoutMaintenance_EntryInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    owner: UserCreateNestedOneWithoutVehicleInput
    Maintenance_Item?: Maintenance_ItemCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenance_EntryInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
    userId: string
    Maintenance_Item?: Maintenance_ItemUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenance_EntryInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenance_EntryInput, VehicleUncheckedCreateWithoutMaintenance_EntryInput>
  }

  export type Maintenance_ItemCreateWithoutMaintenance_EntryInput = {
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    vehicle: VehicleCreateNestedOneWithoutMaintenance_ItemInput
  }

  export type Maintenance_ItemUncheckedCreateWithoutMaintenance_EntryInput = {
    id?: number
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
    vehicleId: string
  }

  export type Maintenance_ItemCreateOrConnectWithoutMaintenance_EntryInput = {
    where: Maintenance_ItemWhereUniqueInput
    create: XOR<Maintenance_ItemCreateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedCreateWithoutMaintenance_EntryInput>
  }

  export type VehicleUpsertWithoutMaintenance_EntryInput = {
    update: XOR<VehicleUpdateWithoutMaintenance_EntryInput, VehicleUncheckedUpdateWithoutMaintenance_EntryInput>
    create: XOR<VehicleCreateWithoutMaintenance_EntryInput, VehicleUncheckedCreateWithoutMaintenance_EntryInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenance_EntryInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenance_EntryInput, VehicleUncheckedUpdateWithoutMaintenance_EntryInput>
  }

  export type VehicleUpdateWithoutMaintenance_EntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVehicleNestedInput
    Maintenance_Item?: Maintenance_ItemUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenance_EntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    Maintenance_Item?: Maintenance_ItemUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type Maintenance_ItemUpsertWithoutMaintenance_EntryInput = {
    update: XOR<Maintenance_ItemUpdateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedUpdateWithoutMaintenance_EntryInput>
    create: XOR<Maintenance_ItemCreateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedCreateWithoutMaintenance_EntryInput>
    where?: Maintenance_ItemWhereInput
  }

  export type Maintenance_ItemUpdateToOneWithWhereWithoutMaintenance_EntryInput = {
    where?: Maintenance_ItemWhereInput
    data: XOR<Maintenance_ItemUpdateWithoutMaintenance_EntryInput, Maintenance_ItemUncheckedUpdateWithoutMaintenance_EntryInput>
  }

  export type Maintenance_ItemUpdateWithoutMaintenance_EntryInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenance_ItemNestedInput
  }

  export type Maintenance_ItemUncheckedUpdateWithoutMaintenance_EntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateManyOwnerInput = {
    id?: string
    name: string
    model?: string | null
    make?: string | null
    year?: number | null
    odometer_miles?: number | null
  }

  export type VehicleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    Maintenance_Item?: Maintenance_ItemUpdateManyWithoutVehicleNestedInput
    Maintenance_Entry?: Maintenance_EntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
    Maintenance_Item?: Maintenance_ItemUncheckedUpdateManyWithoutVehicleNestedInput
    Maintenance_Entry?: Maintenance_EntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    odometer_miles?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Maintenance_ItemCreateManyVehicleInput = {
    id?: number
    name: string
    comments?: string | null
    time_interval_days?: number | null
    usage_interval_miles?: number | null
    recurring: boolean
  }

  export type Maintenance_EntryCreateManyVehicleInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    maintenance_ItemId?: number | null
  }

  export type Maintenance_ItemUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    Maintenance_Entry?: Maintenance_EntryUpdateManyWithoutMaintenance_itemNestedInput
  }

  export type Maintenance_ItemUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
    Maintenance_Entry?: Maintenance_EntryUncheckedUpdateManyWithoutMaintenance_itemNestedInput
  }

  export type Maintenance_ItemUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    time_interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    usage_interval_miles?: NullableFloatFieldUpdateOperationsInput | number | null
    recurring?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Maintenance_EntryUpdateWithoutVehicleInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance_item?: Maintenance_ItemUpdateOneWithoutMaintenance_EntryNestedInput
  }

  export type Maintenance_EntryUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance_ItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Maintenance_EntryUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance_ItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Maintenance_EntryCreateManyMaintenance_itemInput = {
    id?: number
    title: string
    details: string
    date: Date | string
    vehicleId: string
  }

  export type Maintenance_EntryUpdateWithoutMaintenance_itemInput = {
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenance_EntryNestedInput
  }

  export type Maintenance_EntryUncheckedUpdateWithoutMaintenance_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type Maintenance_EntryUncheckedUpdateManyWithoutMaintenance_itemInput = {
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