import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-RW';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;