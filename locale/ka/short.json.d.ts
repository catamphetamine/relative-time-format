import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ka';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;