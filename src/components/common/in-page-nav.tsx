import React from "react";
import Link from "next/link";

import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface InPageNavProps {
  title?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

export function InPageNav({ title = "home", breadcrumbs }: InPageNavProps) {
  return (
    <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <Link href="/">{title}</Link>
          </BreadcrumbItem>
          {breadcrumbs?.map((crumb, index) => (
            <React.Fragment key={`${crumb.label}-${index}`}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
