'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, SearchIcon, CheckIcon } from 'lucide-react';

/* ─────────────────────────────────────────────
   SearchableSelect — custom combobox component
   with search input & grouped items support
   ───────────────────────────────────────────── */

export interface SelectOption {
  value: string;
  label: string;
  group?: string;
}

interface SearchableSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export function SearchableSelect({ value, onValueChange, options, placeholder, className }: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Current label
  const selectedLabel = options.find(o => o.value === value)?.label ?? placeholder ?? '';

  // Filter options
  const query = search.toLowerCase().trim();
  const filtered = query
    ? options.filter(o => o.label.toLowerCase().includes(query) || o.group?.toLowerCase().includes(query))
    : options;

  // Grouped items
  const groups = [...new Set(filtered.map(o => o.group ?? ''))];

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        panelRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
      setSearch('');
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Auto-focus search on open — skip on mobile to avoid keyboard popup
  React.useEffect(() => {
    if (open) {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      if (isDesktop) {
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    }
  }, [open]);

  function select(val: string) {
    onValueChange(val);
    setOpen(false);
    setSearch('');
  }

  return (
    <div className={cn('relative w-full', className)}>
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={cn(
          'flex w-full items-start justify-between rounded-md border border-input-border bg-white px-3 py-2 text-sm',
          'hover:bg-light-sage transition-colors duration-150 cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-sage-mint/50 focus:border-sage-mint',
          'min-h-[36px]'
        )}
      >
        <span className="whitespace-normal break-words text-left flex-1 min-w-0">
          {selectedLabel || <span className="text-sage-secondary/60">{placeholder}</span>}
        </span>
        <ChevronDownIcon className={cn('h-4 w-4 shrink-0 text-sage-secondary ml-2 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          ref={panelRef}
          className={cn(
            'absolute z-50 mt-1 w-full rounded-md border border-surface-variant bg-white shadow-lg',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            'flex flex-col max-h-[420px]'
          )}
        >
          {/* Search input */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-surface-variant sticky top-0 bg-white rounded-t-md z-10">
            <SearchIcon className="h-4 w-4 text-sage-secondary shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari..."
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-sage-secondary/50"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="text-xs text-sage-secondary hover:text-forest-primary cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Options list */}
          <div className="overflow-y-auto flex-1 py-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-4 text-sm text-sage-secondary text-center">
                Tidak ditemukan
              </div>
            ) : (
              groups.map(group => {
                const groupItems = filtered.filter(o => (o.group ?? '') === group);
                if (!groupItems.length) return null;
                return (
                  <div key={group}>
                    {group && (
                      <div className="px-3 py-1.5 text-xs font-semibold text-sage-secondary uppercase tracking-wider sticky top-0 bg-white/95 backdrop-blur-sm">
                        {group}
                      </div>
                    )}
                    {groupItems.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => select(opt.value)}
                        className={cn(
                          'flex w-full items-center gap-2 px-3 py-1.5 text-sm text-left cursor-pointer',
                          'hover:bg-light-sage transition-colors duration-100',
                          opt.value === value && 'bg-sage-mint/20 font-medium'
                        )}
                      >
                        <span className="flex-1 min-w-0">{opt.label}</span>
                        {opt.value === value && <CheckIcon className="h-3.5 w-3.5 text-sage-secondary shrink-0" />}
                      </button>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
