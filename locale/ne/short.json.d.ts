import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ne';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;