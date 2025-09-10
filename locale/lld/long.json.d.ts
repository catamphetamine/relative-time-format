import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lld';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;