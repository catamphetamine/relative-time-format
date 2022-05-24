import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-KE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;