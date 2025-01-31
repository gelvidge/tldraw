## API Report File for "@tldraw/tlsync-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { SyncedStore } from '@tldraw/editor';
import { TldrawEditorConfig } from '@tldraw/editor';
import { TLInstanceId } from '@tldraw/editor';

// @public (undocumented)
export const DEFAULT_DOCUMENT_NAME: any;

// @public
export function hardReset({ shouldReload }?: {
    shouldReload?: boolean | undefined;
}): Promise<void>;

// @public (undocumented)
export const STORE_PREFIX = "TLDRAW_DOCUMENT_v2";

// @public (undocumented)
export const TAB_ID: TLInstanceId;

// @public
export function useLocalSyncClient({ universalPersistenceKey, instanceId, config, }: {
    universalPersistenceKey: string;
    instanceId: TLInstanceId;
    config: TldrawEditorConfig;
}): SyncedStore;

// (No @packageDocumentation comment for this package)

```
