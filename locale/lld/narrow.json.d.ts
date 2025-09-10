import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lld';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;