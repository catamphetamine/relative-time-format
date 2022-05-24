import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'th';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;