import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ceb';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;