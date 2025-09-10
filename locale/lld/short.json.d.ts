import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lld';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;