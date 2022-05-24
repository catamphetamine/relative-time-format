import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;