import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bs';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;